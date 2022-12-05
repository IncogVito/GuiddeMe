import {Component, Input, OnInit} from '@angular/core';
import {TaskViewModel} from "../../models/task.model";
import {ArrayUtilService} from "../../services/utils/array-util.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input()
  public taskNames: string[] = [];

  @Input()
  public defaultActiveIndex = 0;

  @Input()
  public noTasksLabel = 'Brak zadań';

  public taskList: TaskViewModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initializeTaskList();
  }

  public doNextStep() {
    if (ArrayUtilService.isEmpty(this.taskList)) {
      return;
    }

    let activeIndex = -1;
    let counter = 0;
    for (let singleTask of this.taskList) {
      if (singleTask.currentActive) {
        singleTask.finished = true;
        singleTask.currentActive = false;
        activeIndex = counter;
      }
      counter++;
    }

    if (activeIndex < 0) {
      const firstElement = ArrayUtilService.getFirstRequired(this.taskList);
      firstElement.currentActive = true;
    }

    if (ArrayUtilService.lengthOf(this.taskList) <= activeIndex + 1) {
      return;
    }

    const nextElement = this.taskList[activeIndex + 1];
    nextElement.currentActive = true;
  }

  private initializeTaskList() {
    this.taskList = this.taskNames.map((taskName: string, index: number) => {
      return {
        name: taskName,
        currentActive: this.defaultActiveIndex === index,
        finished: this.defaultActiveIndex > index
      }
    })
  }
}
