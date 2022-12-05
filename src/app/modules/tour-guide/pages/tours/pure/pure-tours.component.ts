import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourViewModel} from "../../../models/tour.model";

@Component({
  selector: 'app-pure-tours',
  templateUrl: './pure-tours.component.html',
  styleUrls: ['./pure-tours.component.scss']
})
export class PureToursComponent implements OnInit {

  @Input()
  public tours: TourViewModel[] = [];

  @Output()
  public chooseTour = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit(): void {
    this.tours = this.tours.map(singleTour => {
      return Object.defineProperties({...singleTour}, {
        expanded: {
          value: false,
          configurable: true,
          writable: true
        }
      });
    })
  }

  toggleTour(singleTour: TourViewModel) {
    const defaultExpandState = !singleTour.expanded;
    this.tours.forEach(singleTour => singleTour.expanded = false);
    singleTour.expanded = defaultExpandState;
  }

}
