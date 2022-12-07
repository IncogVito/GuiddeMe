import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, take, tap} from 'rxjs';
import {Store} from "@ngxs/store";
import {ToursState} from "../stores/tours/tours.state";
import {Navigate} from "@ngxs/router-plugin";

@Injectable({
  providedIn: 'root'
})
export class RequiredTourPreviewDataLoadedGuard implements CanActivate {

  constructor(private readonly store: Store,
              private readonly toursState: ToursState) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.toursState.toursState$
      .pipe(
        take(1),
        tap(state => {
          if (!state.fetched) {
            this.store.dispatch(new Navigate(['introduction']));
          }
        }),
        map(state => !!state.fetched)
      );
  }
}
