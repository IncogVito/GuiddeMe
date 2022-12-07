import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TourStopModel} from "../../../../models/tour-stop.model";
import {TaskListComponent} from "../../../../../shared/components/task-list/task-list.component";
import {TourStopUtilService} from "../../../../services/util/tour-stop.util.service";
import {MapElement} from "../../../../../shared/models/map.model";
import {
  GoogleMapReadOnlyComponent
} from "../../../../../shared/components/maps/google-map-read-only/google-map-read-only.component";
import {ArrayUtilService} from "../../../../../shared/services/utils/array-util.service";

@Component({
  selector: 'guidde-me-pure-game-stop-list',
  templateUrl: './pure-game-stop-list.component.html',
  styleUrls: ['./pure-game-stop-list.component.scss']
})
export class PureGameStopListComponent implements OnInit {

  @ViewChild(TaskListComponent)
  public taskListComponent!: TaskListComponent;

  @ViewChild(GoogleMapReadOnlyComponent)
  public googleMapReadOnlyComponent!: GoogleMapReadOnlyComponent;

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
  private currentActiveIndex = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.stopNameList = TourStopUtilService.extractFileNames(this.stopList);
    this.extractMapPins();
  }

  public doNextStep() {
    if (!this.taskListComponent) {
      throw new Error(`Couldn't find TaskList to perform next step action`);
    }
    this.taskListComponent.doNextStep();
    this.currentActiveIndex++;
    this.extractMapPins();
    this.renderNextRoute();
  }

  private extractMapPins() {
    this.mapPins = TourStopUtilService.extractMapPins(this.stopList, this.currentActiveIndex);
  }

  private renderNextRoute() {
    if (ArrayUtilService.lengthOf(this.stopList) <= this.currentActiveIndex) {
      return;
    }
    const [originPoint, destinationPoint]: [MapElement, MapElement]
      = TourStopUtilService.extractRoutePins(this.stopList, this.currentActiveIndex - 1, this.currentActiveIndex);
    this.googleMapReadOnlyComponent.renderNextRoute(originPoint, destinationPoint);
  }
}
