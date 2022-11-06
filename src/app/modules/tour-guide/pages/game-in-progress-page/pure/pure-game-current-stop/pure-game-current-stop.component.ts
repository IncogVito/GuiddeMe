import {Component, Input} from '@angular/core';
import {TourStopModel} from "../../../../models/tour-stop.model";

@Component({
  selector: 'guidde-me-pure-game-current-stop',
  templateUrl: './pure-game-current-stop.component.html',
  styleUrls: ['./pure-game-current-stop.component.scss']
})
export class PureGameCurrentStopComponent {

  @Input()
  public tourStop: TourStopModel | undefined;

  constructor() { }
}
