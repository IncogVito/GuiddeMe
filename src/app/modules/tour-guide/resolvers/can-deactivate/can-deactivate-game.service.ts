import {Injectable} from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {GamePageComponent} from "../../pages/game-in-progress-page/wrapper/game-page.component";
import {MatDialog} from "@angular/material/dialog";
import {GameState} from "../../stores/game/game.state";
import {map, Observable, of, switchMap, take} from "rxjs";
import {
  DialogDecisionData,
  DialogDecisionPrimaryComponent
} from "../../../shared/components/dialog-decision-primary/dialog-decision-primary.component";
import {DecisionDialogResult, DecisionEnum} from "../../../shared/models/decision.model";
import {QUIT_GAME_CONFIRMATION} from "../../commons/modal.commons";

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGame implements CanDeactivate<GamePageComponent> {
  constructor(private dialog: MatDialog,
              private readonly gameState: GameState) {
  }

  canDeactivate(component: GamePageComponent) {
    return this.gameState.gameState$.pipe(
      take(1),
      map(state => !state.started || !(state.currentStopIndex > 1)),
      switchMap(canBeStraightDeactivated => {
        if (canBeStraightDeactivated) {
          return of(canBeStraightDeactivated)
        }
        return this.getConfirmationResult();
      })
    )
  }

  private getConfirmationResult(): Observable<boolean> {
    return this.dialog.open<any, DialogDecisionData, DecisionDialogResult>(DialogDecisionPrimaryComponent, {
      data: QUIT_GAME_CONFIRMATION,
      disableClose: false
    }).afterClosed()
      .pipe(
        take(1),
        map(decisionWrapper => !!decisionWrapper && DecisionEnum.YES === decisionWrapper.decision)
      )
  }
}
