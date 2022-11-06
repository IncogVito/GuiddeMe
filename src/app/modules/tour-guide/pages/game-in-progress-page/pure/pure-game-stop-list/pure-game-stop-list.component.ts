import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TourStopModel} from "../../../../models/tour-stop.model";
import {TaskListComponent} from "../../../../../shared/components/task-list/task-list.component";
import {TourStopUtilService} from "../../../../services/util/tour-stop.util.service";

@Component({
  selector: 'guidde-me-pure-game-stop-list',
  templateUrl: './pure-game-stop-list.component.html',
  styleUrls: ['./pure-game-stop-list.component.scss']
})
export class PureGameStopListComponent implements OnInit {

  @ViewChild(TaskListComponent)
  public taskListComponent!: TaskListComponent;

  @Input()
  public stopList: TourStopModel[] = [];

  public stopNameList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stopNameList = TourStopUtilService.extractFileNames(this.stopList);
  }

  public doNextStep() {
    if (!this.taskListComponent) {
      throw new Error(`Couldn't find TaskList to perform next step action`);
    }
    this.taskListComponent.doNextStep();
  }

}
