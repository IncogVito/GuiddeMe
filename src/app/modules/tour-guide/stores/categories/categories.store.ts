import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {CategoriesState, getDefaultCategoriesState} from "./categories.state";
import {CategoryApiService} from "../../services/category-api.service";
import {EMPTY, Observable, tap} from "rxjs";
import {CategoryViewModel} from "../../models/category.model";

export namespace Category {
  export class Create {
    static readonly type = '[Category API] CreateCategory';

    constructor(public payload: any) {
    }
  }

  export class Edit {
    static readonly type = '[Category API] EditCategory';

    constructor(public payload: any) {
    }
  }

  export class FetchAll {
    static readonly type = '[Category API] FetchAllCategories';
  }

  export class Deactivate {
    static readonly type = '[Category API] DeleteCategory';

    constructor(public id: number) {
    }
  }
}

@State<CategoriesState>({
  name: 'category',
  defaults: getDefaultCategoriesState
})
@Injectable()
export class CategoriesStore {

  public categories$: Observable<CategoryViewModel[]> = EMPTY;

  constructor(private categoryApiService: CategoryApiService,
              private readonly store: Store) {
    this.categories$ = store.select(state => state.category.categories);
  }

  @Action(Category.FetchAll)
  feedAnimals(ctx: StateContext<CategoriesState>, _: Category.FetchAll) {
    return this.categoryApiService.fetchAllEntities().pipe(
      tap(result => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          fetched: true,
          loading: true,
          categories: [...result.entity.entities]
        });
      })
    );
  }
}
