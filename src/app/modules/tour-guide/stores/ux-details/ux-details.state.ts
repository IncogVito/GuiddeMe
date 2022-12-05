import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {getDefaultUxDetailState, UxDetailsStateModel} from "./ux-details.state-model";
import {ToursApiService} from "../../services/tours-api.service";
import {EMPTY, Observable} from "rxjs";
import {UxDetailsActions} from "./ux-details.actions";

@State<UxDetailsStateModel>({
  name: 'uxDetails',
  defaults: getDefaultUxDetailState
})
@Injectable()
export class UxDetailsState {

  public uxDetailsState$: Observable<UxDetailsStateModel> = EMPTY;

  constructor(private toursApiService: ToursApiService,
              private readonly store: Store) {

    this.uxDetailsState$ = store.select(state => state['uxDetails']);
  }

  @Action(UxDetailsActions.IntroductionRead)
  introductionRead(ctx: StateContext<UxDetailsStateModel>, _: UxDetailsActions.IntroductionRead) {
    ctx.patchState({firstTime: false});
  }
}
