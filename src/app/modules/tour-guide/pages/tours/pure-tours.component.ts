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

  @Input()
  public backgroundImageUrl: string = '';

  backgroundImageStyle: { 'background-image': string } | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.resolveBackgroundStyle();
  }

  toggleTour(singleTour: TourViewModel) {
    const defaultExpandState = !singleTour.expanded;
    this.tours.forEach(singleTour => singleTour.expanded = false);
    singleTour.expanded = defaultExpandState;
  }

  private resolveBackgroundStyle() {
    if (this.backgroundImageUrl) {
      this.backgroundImageStyle = {
        'background-image': `url('${this.backgroundImageUrl}')`
      }
    }
  }
}
