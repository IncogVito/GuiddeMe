import {Injectable} from '@angular/core';
import {Actions, ofActionCompleted, ofActionDispatched} from "@ngxs/store";
import {ActionType} from "@ngxs/store/src/actions/symbols";
import {Category} from "../../../tour-guide/stores/categories/categories.state";
import {combineLatest, combineLatestAll, map, merge, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActionHandlerService {

  constructor(private readonly actions: Actions) {

  }

  public listenActionDispatchCompleteCycle(actionType: ActionType): Observable<any> {
    const startActionEvent$ = this.actions.pipe(
      ofActionDispatched(actionType),
      map(() => true)
    );

    const completeActionEvent$ = this.actions.pipe(
      ofActionCompleted(actionType),
      map(() => false)
    )

    return merge(startActionEvent$, completeActionEvent$)
  }
}
