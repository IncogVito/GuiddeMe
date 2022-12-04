import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GameState} from "../../../stores/game/game.state";
import {distinctUntilChanged, EMPTY, filter, map, Observable, Subject, take, takeUntil} from "rxjs";
import {GameStateModel} from "../../../stores/game/game.state-model";
import {TourStopModel} from "../../../models/tour-stop.model";
import {Store} from "@ngxs/store";
import {GameActions} from "../../../stores/game/game.actions";
import {PureGameComponent} from "../pure/pure-game/pure-game.component";
import {ArrayUtilService} from "../../../../shared/services/utils/array-util.service";
import {GameModalHelperService} from "../../../services/helper/game-modal-helper.service";

@Component({
  selector: 'guidde-me-wrapper',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
  providers: [GameModalHelperService]
})
export class GamePageComponent implements OnInit, OnDestroy {

  @ViewChild(PureGameComponent)
  public pureGameComponent: PureGameComponent | undefined;

  public gameStateModel: GameStateModel | undefined;
  public tourStops: TourStopModel[] = [];
  public currentStop!: TourStopModel;
  public nextStop: TourStopModel | undefined;
  public currentStopIndex: number = 0;

  public gameState$: Observable<GameStateModel> = EMPTY;

  private ngDestroy$ = new Subject<void>();

  constructor(private readonly store: Store,
              private readonly gameState: GameState,
              private readonly gameModalHelperService: GameModalHelperService,) {
  }

  ngOnInit(): void {
    this.gameState$ = this.gameState.gameState$;
    this.gameState$.pipe(
      filter(state => state.started),
      take(1)
    )
      .subscribe(stateVal => this.initializeGameView(stateVal));

    this.listenOnStepChanged();
    this.listenOnQuizStateToggled();
    this.gameModalHelperService.ngOnInit();
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  private initializeGameView(stateVal: GameStateModel) {
    this.gameStateModel = stateVal;
    this.tourStops = stateVal.stops;
    this.currentStop = stateVal.stops[0];
    this.nextStop = stateVal.stops[1];
  }

  nextStopRequested() {
    this.store.dispatch(new GameActions.RequestNextStop());
  }

  private listenOnStepChanged() {
    this.gameState$.pipe(
      filter(state => state.started),
      distinctUntilChanged((prevState, currState) => prevState.currentStopIndex === currState.currentStopIndex),
      takeUntil(this.ngDestroy$)
    )
      .subscribe(currState => {
        if (!currState.finished && this.pureGameComponent) {
          ++this.currentStopIndex;
          this.currentStop = ArrayUtilService.getAtIndex(this.tourStops, this.currentStopIndex)!;
          this.nextStop = ArrayUtilService.getAtIndex(this.tourStops, this.currentStopIndex + 1);
          this.pureGameComponent.doNextStep();
        }
      });
  }

  toggleQuizState(targetQuizState: boolean) {
    if (targetQuizState) {
      this.store.dispatch(new GameActions.EnableQuiz());
    } else {
      this.store.dispatch(new GameActions.DisableQuiz());
    }
  }

  private listenOnQuizStateToggled() {
    this.gameState$.pipe(
      filter(state => state.started),
      distinctUntilChanged((prevState, currState) => prevState.quizEnabled === currState.quizEnabled),
      takeUntil(this.ngDestroy$)
    )
      .subscribe(stateVal => this.gameStateModel = stateVal);
  }
}
