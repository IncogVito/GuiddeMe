import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TourStopModel} from "../../../../models/tour-stop.model";
import {TaskListComponent} from "../../../../../shared/components/task-list/task-list.component";
import {PureGameStopListComponent} from "../pure-game-stop-list/pure-game-stop-list.component";

@Component({
  selector: 'guidde-me-pure-game',
  templateUrl: './pure-game.component.html',
  styleUrls: ['./pure-game.component.scss']
})
export class PureGameComponent implements OnInit {

  @ViewChild(PureGameStopListComponent)
  public pureGameStopListComponent!: PureGameStopListComponent;

  @Output()
  public nextStopRequest = new EventEmitter();

  @Input()
  public stopsList: TourStopModel[] = [];

  @Input()
  public currentStop: TourStopModel | undefined;

  @Input()
  public nextStop: TourStopModel | undefined;

  public currentStopVisible: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
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
