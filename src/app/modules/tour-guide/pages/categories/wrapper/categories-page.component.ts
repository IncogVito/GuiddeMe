import {Component, OnDestroy, OnInit} from '@angular/core';
import {EMPTY, Observable, of, Subject, takeUntil, tap} from "rxjs";
import {CategoryViewModel} from "../../../models/category.model";
import {Actions, ofActionCompleted, ofActionDispatched, Store} from "@ngxs/store";
import {Navigate} from "@ngxs/router-plugin";
import {CategoriesState, Category} from "../../../stores/categories/categories.state";
import {CategoriesStateModel} from "../../../stores/categories/categories.state-model";
import {ActionHandlerService} from "../../../../shared/services/utils/action-handler.service";

@Component({
  selector: 'app-categories-wrapper',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit, OnDestroy {

  public categories$: Observable<CategoryViewModel[]> = EMPTY;
  public categoriesState$: Observable<CategoriesStateModel> = EMPTY;
  public loadingInProgress$: Observable<boolean> = EMPTY;
  private ngDestroy$ = new Subject<void>();

  constructor(private readonly store: Store,
              private readonly actions$: Actions,
              private readonly actionHandlerService: ActionHandlerService,
              private readonly categoriesState: CategoriesState) {
  }

  ngOnInit(): void {
    this.loadCategories$();
    this.categories$ = this.categoriesState.categories$;
    this.categoriesState$ = this.categoriesState.categoriesState$;
  }

  private loadCategories$(): void {
    this.store.dispatch(new Category.FetchAll());
  }

  public chooseCategory(categoryId: string) {
    this.store.dispatch(new Navigate(['tours'], {categoryId: categoryId}));
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

}
