import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable, of} from "rxjs";
import {CategoryViewModel} from "../../../models/category.model";
import {Store} from "@ngxs/store";
import {Navigate} from "@ngxs/router-plugin";

@Component({
  selector: 'app-categories-wrapper',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  public categories$: Observable<CategoryViewModel[]> = EMPTY;

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.categories$ = this.loadCategories$();
  }

  private loadCategories$(): Observable<CategoryViewModel[]> {
    return of([{
      id: '1',
      name: 'First Tour',
      toursCount: 3
    }]);
  }

  public chooseCategory(categoryId: string) {
    this.store.dispatch(new Navigate(['category', categoryId]));
  }
}
