import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable, of} from "rxjs";
import {CategoryViewModel} from "../../../models/category.model";
import {Store} from "@ngxs/store";
import {Navigate} from "@ngxs/router-plugin";
import {CategoriesStore, Category} from "../../../stores/categories/categories.store";

@Component({
  selector: 'app-categories-wrapper',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  public categories$: Observable<CategoryViewModel[]> = EMPTY;

  constructor(private readonly store: Store,
              private readonly categoriesStore: CategoriesStore) {
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
