import {Component, input, OnInit, output} from '@angular/core';
import {TourViewModel} from "../../../models/tour.model";

@Component({
  selector: 'app-pure-tours',
  templateUrl: './pure-tours.component.html',
  styleUrls: ['./pure-tours.component.scss'],
  standalone: false
})
export class PureToursComponent implements OnInit {

  public tours = input<TourViewModel[]>();
  public convertedTours: TourViewModel[] = [];

  public chooseTour = output<string>();


  constructor() {
  }

  ngOnInit(): void {
    this.convertedTours = this.tours()!.map(singleTour => {
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
    this.convertedTours.forEach(singleTour => singleTour.expanded = false);
    singleTour.expanded = defaultExpandState;
  }
}
