import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {combineLatestWith, filter, map, Observable, take, tap} from 'rxjs';
import {Store} from "@ngxs/store";
import {TourModel} from "../models/tour.model";
import {ToursState} from "../stores/tours/tours.state";
import {ArrayUtilService} from "../../shared/services/utils/array-util.service";
import {TourStopsState} from "../stores/tour-stops/tour-stops.state";
import {TourStopsActions} from "../stores/tour-stops/tour-stops.actions";
import {TourStopModel} from "../models/tour-stop.model";

@Injectable({
  providedIn: 'root'
})
export class TourPreviewResolver implements Resolve<[TourModel, TourStopModel[]]> {

  constructor(private readonly store: Store,
              private readonly toursState: ToursState,
              private readonly tourStopsState: TourStopsState) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[TourModel, TourStopModel[]]> {
    const tourId: string = route.queryParams['tourId'];
    const tourStops$: Observable<TourStopModel[]> = this.tourStopsState.tourStopsState$.pipe(
      filter(state => state.fetched),
      take(1),
      tap(val => console.log(val)),
      map(state => state.tourStops)
    );

    return this.toursState.toursState$
      .pipe(
        filter(state => state.fetched),
        map(toursStateValue => toursStateValue.tours),
        map(tours => ArrayUtilService.getFirstByFieldEq(tours, 'id', tourId)),
        map(tour => tour!),
        tap(tour => this.store.dispatch(new TourStopsActions.LoadByTour({tourId: tour.id}))),
        combineLatestWith(tourStops$)
      );
  }
}
