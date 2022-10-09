import {Component, Input, OnInit} from '@angular/core';
import {TourViewModel} from "../../models/tour.model";

@Component({
  selector: 'app-tours',
  templateUrl: './pure-tours.component.html',
  styleUrls: ['./pure-tours.component.scss']
})
export class PureToursComponent implements OnInit {

  @Input()
  public pageTitle: string = '';

  @Input()
  public tours: TourViewModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleTour(singleTour: TourViewModel) {
    const defaultExpandState = !singleTour.expanded;
    this.tours.forEach(singleTour => singleTour.expanded = false);
    singleTour.expanded = defaultExpandState;
  }
}
