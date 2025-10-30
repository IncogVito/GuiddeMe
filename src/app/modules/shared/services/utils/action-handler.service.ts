import {Injectable} from '@angular/core';
import {Actions, ActionType, ofActionCompleted, ofActionDispatched} from "@ngxs/store";
import {map, merge, Observable} from "rxjs";

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
