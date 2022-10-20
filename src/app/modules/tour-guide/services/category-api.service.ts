import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {CategoryViewModel} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor() { }

  public fetchAllEntities(): Observable<CategoryViewModel[]> {
    return of([{
      id: '1',
      name: 'Kategoria 1',
      toursCount: 5
    }])
  }
}
