import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {CategoriesStateModel, getDefaultCategoriesState} from "./categories.state-model";
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

@State<CategoriesStateModel>({
  name: 'category',
  defaults: getDefaultCategoriesState
})
@Injectable()
export class CategoriesState {

  public categories$: Observable<CategoryViewModel[]> = EMPTY;
  public categoriesState$: Observable<CategoriesStateModel> = EMPTY;

  constructor(private categoryApiService: CategoryApiService,
              private readonly store: Store) {
    this.categories$ = store.select(state => state['category'].categories);
    this.categoriesState$ = store.select(state => state['category']);
  }

  @Action(Category.FetchAll)
  fetchCategories(ctx: StateContext<CategoriesStateModel>, _: Category.FetchAll) {
    ctx.patchState({loading: true, fetched: false});
    return this.categoryApiService.fetchAllEntities().pipe(
      tap(result => {
        ctx.patchState({
          fetched: true,
          loading: false,
          categories: [...result.entity.entities]
        });
      })
    );
  }

}
