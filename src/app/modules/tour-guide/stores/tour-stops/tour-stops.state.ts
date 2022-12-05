import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {EMPTY, Observable, tap} from "rxjs";
import {getDefaultTourStopsState, TourStopsStateModel} from "./tour-stops.state-model";
import {TourStopsActions} from "./tour-stops.actions";
import {TourStopApiService} from "../../services/tour-stop-api.service";

@State<TourStopsStateModel>({
  name: 'tourStops',
  defaults: getDefaultTourStopsState
})
@Injectable()
export class TourStopsState {

  public tourStopsState$: Observable<TourStopsStateModel> = EMPTY;

  constructor(private tourStopApiService: TourStopApiService,
              private readonly store: Store) {

    this.tourStopsState$ = store.select(state => state['tourStops']);
  }

  @Action(TourStopsActions.LoadByTour)
  loadTourStops(ctx: StateContext<TourStopsStateModel>, action: TourStopsActions.LoadByTour) {
    if (!ctx.getState().fetched || ctx.getState().tourId !== action.payload.tourId) {
      return ctx.dispatch(new TourStopsActions.FetchByTour(action.payload))
    }
    return EMPTY;
  }

  @Action(TourStopsActions.FetchByTour)
  fetchTourStops(ctx: StateContext<TourStopsStateModel>, action: TourStopsActions.FetchByTour) {
    ctx.patchState({loading: true, fetched: false, tourId: action.payload.tourId});
    return this.tourStopApiService.loadEntitiesByParams(action.payload)
      .pipe(
        tap(result => {
          ctx.patchState({
            fetched: true,
            loading: false,
            tourStops: [...result.entity.entities],
          });
        }),
      );
  }
}
