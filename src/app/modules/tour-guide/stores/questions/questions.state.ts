import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {EMPTY, filter, map, Observable, of, switchMap, take, tap} from "rxjs";
import {QuestionsStateModel, getDefaultQuestionsState} from "./questions.state-model";
import {QuestionsActions} from "./questions.actions";
import {TourStopsStateModel} from "../tour-stops/tour-stops.state-model";
import {QuestionUtilService} from "../../services/util/question.util.service";
import {QuestionSearchParams} from "../../models/question.model";
import {QuestionApiService} from "../../services/question-api.service";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";
import {getEmptyEntitiesResult} from "../../../shared/models/firestore.model";

@State<QuestionsStateModel>({
  name: 'questions',
  defaults: getDefaultQuestionsState
})
@Injectable()
export class QuestionsState {

  public questionState$: Observable<QuestionsStateModel> = EMPTY;

  constructor(private readonly store: Store,
              private readonly questionApiService: QuestionApiService) {
    this.questionState$ = store.select(state => state['questions']);
  }

  @Action(QuestionsActions.LoadQuestions)
  loadQuestions(ctx: StateContext<QuestionsStateModel>, action: QuestionsActions.LoadQuestions) {
    const tourId = action.payload.tourId;
    if (ctx.getState().tourId === tourId) {
      return;
    }

    ctx.patchState({
      loading: true,
      fetched: false,
      tourId: tourId
    });
    return this.store.select(state => state['tourStops'])
      .pipe(
        map(tourStopsState => tourStopsState as TourStopsStateModel),
        filter(tourStopsState => tourStopsState.tourId === tourId),
        take(1),
        map(tourStopsState => QuestionUtilService.extractQuestionIds(tourStopsState.tourStops)),
        map(questionIds => {
          return {questionIds} as Partial<QuestionSearchParams>
        }),
        switchMap(searchParams =>
          ArrayUtilService.isNotEmpty(searchParams.questionIds) ?
            this.questionApiService.loadEntitiesByParams(searchParams) : of(getEmptyEntitiesResult)
        ),
        take(1),
        tap(result => {
          ctx.patchState({
            fetched: true,
            loading: false,
            questions: [...result.entity.entities]
          });
        }),
      )


  }
}
