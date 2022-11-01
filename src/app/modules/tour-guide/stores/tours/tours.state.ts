import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {EMPTY, filter, map, Observable, switchMap, tap} from "rxjs";
import {getDefaultToursState, ToursStateModel} from "./tours.state-model";
import {ToursActions} from "./tours.actions";
import {ToursApiService} from "../../services/tours-api.service";
import {CategoriesStateModel} from "../categories/categories.state-model";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";
import {TourMapperService} from "../../services/mappers/tour-mapper.service";
import {Category} from "../categories/categories.state";

@State<ToursStateModel>({
  name: 'tours',
  defaults: getDefaultToursState
})
@Injectable()
export class ToursState {

  public toursState$: Observable<ToursStateModel> = EMPTY;

  constructor(private toursApiService: ToursApiService,
              private readonly store: Store) {

    this.toursState$ = store.select(state => state['tours']);
  }

  @Action(ToursActions.LoadByCategory)
  loadTours(ctx: StateContext<ToursStateModel>, action: ToursActions.LoadByCategory) {
    if (!ctx.getState().fetched || ctx.getState().categoryId !== action.payload.categoryId) {
      return ctx.dispatch(new ToursActions.FetchByCategory(action.payload))
    }
    return EMPTY;
  }

  @Action(ToursActions.FetchByCategory)
  fetchTours(ctx: StateContext<ToursStateModel>, action: ToursActions.FetchByCategory) {
    ctx.patchState({loading: true, fetched: false, categoryId: action.payload.categoryId});
    return this.toursApiService.loadEntitiesByParams(action.payload)
      .pipe(
        tap(result => {
          ctx.patchState({
            fetched: true,
            loading: false,
            tours: [...result.entity.entities],
            toursViewModel: TourMapperService.mapToViewModels([...result.entity.entities])
          });
        }),
        switchMap(() => ctx.dispatch(new ToursActions.LoadCategoryDetails()))
      );
  }

  @Action(ToursActions.LoadCategoryDetails)
  loadCategoryDetails(ctx: StateContext<ToursStateModel>, _: ToursActions.LoadCategoryDetails) {
    const currentCategoryId = ctx.getState().categoryId!;
    return this.store.select(state => state['category'])
      .pipe(
        tap(categoryState => this.fetchUnloadedCategories(categoryState)),
        filter((categoryState: CategoriesStateModel) => categoryState.fetched),
        map((res: CategoriesStateModel) => res.categories),
        map(categories => ArrayUtilService.getFirstByFieldEq(categories, 'id', currentCategoryId)),
        map(category => {
          if (!category) {
            throw new Error(`Couldn't find category with id: ${currentCategoryId}`)
          }
          return category;
        }),
        tap(singleCategory => ctx.patchState({categoryName: singleCategory.name}))
      );
  }

  private fetchUnloadedCategories(categoriesState: CategoriesStateModel) {
    if (!categoriesState.fetched && !categoriesState.loading) {
      this.store.dispatch(new Category.FetchAll());
    }
  }
}
