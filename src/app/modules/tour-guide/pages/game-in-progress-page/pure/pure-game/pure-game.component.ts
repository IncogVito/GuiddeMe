import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TourStopModel} from "../../../../models/tour-stop.model";
import {PureGameStopListComponent} from "../pure-game-stop-list/pure-game-stop-list.component";
import {WindowUtilService} from "../../../../../shared/services/utils/window-util.service";
import {GameStateModel} from "../../../../stores/game/game.state-model";

@Component({
  selector: 'guidde-me-pure-game',
  templateUrl: './pure-game.component.html',
  styleUrls: ['./pure-game.component.scss']
})
export class PureGameComponent implements OnInit, AfterViewInit {

  @ViewChild(PureGameStopListComponent)
  public pureGameStopListComponent!: PureGameStopListComponent;

  @Output()
  public nextStopRequest = new EventEmitter();

  @Output()
  public toggleQuizState = new EventEmitter<boolean>();

  @Input()
  public stopsList: TourStopModel[] = [];

  @Input()
  public currentStop: TourStopModel | undefined;

  @Input()
  public nextStop: TourStopModel | undefined;

  @Input()
  public gameModel: GameStateModel | undefined;


  public currentStopVisible: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    WindowUtilService.scrollToTheTop();
  }


  public emitDoNextStepAction() {
    this.nextStopRequest.emit();
  }

  public doNextStep() {
    if (this.currentStopVisible) {
      this.currentStopVisible = false;
      setTimeout(() => this.pureGameStopListComponent.doNextStep(), 500);
    } else {
      this.pureGameStopListComponent.doNextStep();
    }
  }
}
