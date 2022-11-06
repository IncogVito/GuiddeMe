import {Component, OnInit} from '@angular/core';
import {GameState} from "../../../stores/game/game.state";
import {EMPTY, filter, Observable, take} from "rxjs";
import {GameStateModel} from "../../../stores/game/game.state-model";
import {TourStopModel} from "../../../models/tour-stop.model";

@Component({
  selector: 'guidde-me-wrapper',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public gameStateModel: GameStateModel | undefined;
  public tourStops: TourStopModel[] = [];
  public currentStop!: TourStopModel;
  public nextStop: TourStopModel | undefined;

  public gameState$: Observable<GameStateModel> = EMPTY;

  constructor(private readonly gameState: GameState) {
  }

  ngOnInit(): void {
    this.gameState$ = this.gameState.gameState$;
    this.gameState$.pipe(
      filter(state => state.started),
      take(1)
    )
      .subscribe(stateVal => this.initializeGameView(stateVal));
  }

  private initializeGameView(stateVal: GameStateModel) {
    this.gameStateModel = stateVal;
    this.tourStops = stateVal.stops;
    this.currentStop = stateVal.stops[0];
    this.nextStop = stateVal.stops[1];
  }
}
