import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {EMPTY, Observable, of, tap} from 'rxjs';
import {Store} from "@ngxs/store";
import {ToursActions} from "../stores/tours/tours.actions";
import {Navigate} from "@ngxs/router-plugin";

@Injectable({
  providedIn: 'root'
})
export class ToursPageResolver implements Resolve<boolean> {

  constructor(private readonly store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const categoryId: string = route.queryParams['categoryId'];
    if (!categoryId) {
      console.error(`Couldn't find categoryId among queryParams.`);
      this.store.dispatch(new Navigate([]));
      return EMPTY;
    }

    setTimeout(() => this.store.dispatch(new ToursActions.LoadByCategory({categoryId})), 0);
    return of(true);
  }
}
