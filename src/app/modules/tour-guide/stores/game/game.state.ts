import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {combineLatestWith, EMPTY, filter, map, Observable, take} from "rxjs";

import {GameStateModel, getDefaultGameState} from "./game.state-model";
import {GameActions} from "./game.actions";
import {ToursStateModel} from "../tours/tours.state-model";
import {TourStopsStateModel} from "../tour-stops/tour-stops.state-model";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";
import {SortUtilService} from "../../../shared/services/utils/sort-util.service";
import {QuestionsActions} from "../questions/questions.actions";

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
          quizEnabled: true
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
      stops: SortUtilService.sortByNumberField(payload.tourStops, 'orderIndex', 'ASC'),
      tour: payload.tour,
      finished: false
    })
    if (payload.tour.quizAvailable) {
      ctx.dispatch(new QuestionsActions.LoadQuestions({tourId: payload.tour.id}));
    }
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
