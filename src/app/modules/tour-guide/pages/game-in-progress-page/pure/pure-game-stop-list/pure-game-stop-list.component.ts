import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TourStopModel} from "../../../../models/tour-stop.model";
import {TaskListComponent} from "../../../../../shared/components/task-list/task-list.component";
import {TourStopUtilService} from "../../../../services/util/tour-stop.util.service";
import {MapElement} from "../../../../../shared/models/map.model";

@Component({
  selector: 'guidde-me-pure-game-stop-list',
  templateUrl: './pure-game-stop-list.component.html',
  styleUrls: ['./pure-game-stop-list.component.scss']
})
export class PureGameStopListComponent implements OnInit {

  @ViewChild(TaskListComponent)
  public taskListComponent!: TaskListComponent;

  @Output()
  public toggleQuizState = new EventEmitter<boolean>();

  @Input()
  public stopList: TourStopModel[] = [];

  @Input()
  public quizAvailable: boolean = false;

  @Input()
  public quizEnabled: boolean = true;

  public stopNameList: string[] = [];
  public mapPins: MapElement[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stopNameList = TourStopUtilService.extractFileNames(this.stopList);
    this.mapPins = TourStopUtilService.extractMapPins(this.stopList);
  }

  public doNextStep() {
    if (!this.taskListComponent) {
      throw new Error(`Couldn't find TaskList to perform next step action`);
    }
    this.taskListComponent.doNextStep();
  }

}
