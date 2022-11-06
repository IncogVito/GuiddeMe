import {Component, Input, OnInit} from '@angular/core';
import {TourStopModel} from "../../../../models/tour-stop.model";

@Component({
  selector: 'guidde-me-pure-game',
  templateUrl: './pure-game.component.html',
  styleUrls: ['./pure-game.component.scss']
})
export class PureGameComponent implements OnInit {

  public currentStopVisible: boolean = false;

  @Input()
  public stopsList: TourStopModel[] = [];

  @Input()
  public currentStop: TourStopModel | undefined;

  @Input()
  public nextStop: TourStopModel | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  public emitDoNextStepAction() {

  }

  public doNextStep() {

  }
}
