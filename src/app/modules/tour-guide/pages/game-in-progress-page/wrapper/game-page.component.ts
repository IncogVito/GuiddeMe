import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GameState} from "../../../stores/game/game.state";
import {distinctUntilChanged, EMPTY, filter, Observable, Subject, take, takeUntil} from "rxjs";
import {GameStateModel} from "../../../stores/game/game.state-model";
import {TourStopModel} from "../../../models/tour-stop.model";
import {Store} from "@ngxs/store";
import {GameActions} from "../../../stores/game/game.actions";
import {PureGameStopListComponent} from "../pure/pure-game-stop-list/pure-game-stop-list.component";
import {PureGameComponent} from "../pure/pure-game/pure-game.component";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogDecisionPrimaryComponent
} from "../../../../shared/components/dialog-decision-primary/dialog-decision-primary.component";

@Component({
  selector: 'guidde-me-wrapper',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit, OnDestroy {

  @ViewChild(PureGameComponent)
  public pureGameComponent: PureGameComponent | undefined;

  public gameStateModel: GameStateModel | undefined;
  public tourStops: TourStopModel[] = [];
  public currentStop!: TourStopModel;
  public nextStop: TourStopModel | undefined;

  public gameState$: Observable<GameStateModel> = EMPTY;

  private ngDestroy$ = new Subject<void>();

  constructor(private readonly store: Store,
              private readonly gameState: GameState,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.gameState$ = this.gameState.gameState$;
    this.gameState$.pipe(
      filter(state => state.started),
      take(1)
    )
      .subscribe(stateVal => this.initializeGameView(stateVal));

    this.listenOnStepChanged();
    this.listenOnGameFinished();
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
    this.store.dispatch(new GameActions.NextStop());
  }

  private listenOnStepChanged() {
    this.gameState$.pipe(
      filter(state => state.started),
      distinctUntilChanged((prevState, currState) => prevState.currentStopIndex === currState.currentStopIndex),
      takeUntil(this.ngDestroy$)
    )
      .subscribe(currState => {
        if (!currState.finished && this.pureGameComponent) {
          this.pureGameComponent.doNextStep();
        }
      });
  }

  private listenOnGameFinished() {
    this.gameState$.pipe(
      filter(state => state.started),
      filter(state => state.finished),
      takeUntil(this.ngDestroy$),
      take(1)
    ).subscribe((finishedState) => {
      // TODO statyki
      this.dialog.open(DialogDecisionPrimaryComponent, {
        data: {
          headerTitle: 'Meta!',
          htmlText: `Brawo, zakończyłeś trasę ${finishedState.tour.title}`,
          acceptButtonLabel: 'Do Menu'
        }
      });
    })
  }
}
