import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable, of} from "rxjs";
import {CategoryViewModel} from "../../../models/category.model";
import {Store} from "@ngxs/store";
import {Navigate} from "@ngxs/router-plugin";
import {CategoriesState, Category} from "../../../stores/categories/categories.state";

@Component({
  selector: 'app-categories-wrapper',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  public categories$: Observable<CategoryViewModel[]> = EMPTY;

  constructor(private readonly store: Store,
              private readonly categoriesStore: CategoriesState) {
  }

  ngOnInit(): void {
    this.loadCategories$();
    this.categories$ = this.categoriesStore.categories$;
  }

  private loadCategories$(): void {
    this.store.dispatch(new Category.FetchAll());
  }

  public chooseCategory(categoryId: string) {
    this.store.dispatch(new Navigate(['category', categoryId]));
  }
}
