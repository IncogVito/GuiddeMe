import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {combineLatestWith, EMPTY, filter, map, Observable, switchMap, take, tap} from "rxjs";

import {GameStateModel, getDefaultGameState} from "./game.state-model";
import {GameActions} from "./game.actions";
import {TourMapperService} from "../../services/mappers/tour-mapper.service";
import {ToursActions} from "../tours/tours.actions";
import {ToursStateModel} from "../tours/tours.state-model";
import {TourStopsStateModel} from "../tour-stops/tour-stops.state-model";
import {combineLatest} from "rxjs/internal/operators/combineLatest";
import {TourModel} from "../../models/tour.model";
import {TourStopModel} from "../../models/tour-stop.model";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";

@State<GameStateModel>({
  name: 'game',
  defaults: getDefaultGameState
})
@Injectable()
export class GameState {

  public gameState$: Observable<GameStateModel> = EMPTY;

  constructor(private readonly store: Store) {

    this.gameState$ = store.select(state => state['game']);
  }

  @Action(GameActions.GatherTourData)
  gatherTourData(ctx: StateContext<GameStateModel>, action: GameActions.GatherTourData) {
    const tourId = action.payload.tourId;

    const tours$ = this.store.select(state => state['tours']).pipe(
      filter((state: ToursStateModel) => state.fetched),
      map(state => state.tours),
      map(tours => ArrayUtilService.getFirstByFieldEq(tours, 'id', tourId)!),
      take(1)
    );

    const tourStops$ = this.store.select(state => state['tourStops']).pipe(
      filter((state: TourStopsStateModel) => state.fetched),
      map(state => state.tourStops),
      take(1)
    );

    return tours$.pipe(
      combineLatestWith(tourStops$),
      map(([tour, tourStops]) => ctx.dispatch(new GameActions.Create({
          tour,
          tourStops,
          quizEnabled: false
        }))
      )
    );
  }

  @Action(GameActions.Create)
  createGame(ctx: StateContext<GameStateModel>, action: GameActions.Create) {
    const payload = action.payload;
    ctx.setState({
      currentStopIndex: 1,
      quizAvailable: payload.tour.quizAvailable,
      quizEnabled: payload.quizEnabled,
      started: true,
      stops: payload.tourStops,
      tour: payload.tour,
      finished: false
    })
  }

  @Action(GameActions.NextStop)
  nextStop(ctx: StateContext<GameStateModel>, _: GameActions.NextStop) {
    if (ctx.getState().currentStopIndex >= ctx.getState().stops.length) {
      ctx.patchState({finished: true})
    } else {
      ctx.patchState({
        currentStopIndex: ctx.getState().currentStopIndex + 1
      })
    }
  }

}
