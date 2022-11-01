import {Component, Input, OnInit} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {ToursStateModel} from "../../../stores/tours/tours.state-model";
import {ToursState} from "../../../stores/tours/tours.state";
import {Store} from "@ngxs/store";
import {ToursActions} from "../../../stores/tours/tours.actions";

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss']
})
export class ToursPageComponent implements OnInit {

  @Input()
  public pageTitle: string = 'Kawiarnie';

  @Input()
  public backgroundImageUrl: string = 'assets/touristic-category.jpg';

  backgroundImageStyle: { 'background-image': string } | undefined;

  public toursState$: Observable<ToursStateModel> = EMPTY;

  constructor(private readonly toursStateService: ToursState,
              private readonly store: Store) {
  }

  ngOnInit(): void {
    this.toursState$ = this.toursStateService.toursState$;
    this.resolveBackgroundStyle();
  }


  navigateToTour(tourId: string) {

  }

  private resolveBackgroundStyle() {
    if (this.backgroundImageUrl) {
      this.backgroundImageStyle = {
        'background-image': `url('${this.backgroundImageUrl}')`
      }
    }
  }
}
