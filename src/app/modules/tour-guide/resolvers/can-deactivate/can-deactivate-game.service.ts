import {Injectable} from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {GamePageComponent} from "../../pages/game-in-progress-page/wrapper/game-page.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGame implements CanDeactivate<GamePageComponent> {
  constructor(private dialog: MatDialog) {
  }

  canDeactivate(component: GamePageComponent) {
    return false;
  }
}
