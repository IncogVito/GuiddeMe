import {GameModel} from "../../models/game.model";

export interface GameStateModel extends GameModel {
  started: boolean;
  finished: boolean;
}

export const getDefaultGameState: GameStateModel = {
  started: false,
  tour: undefined!,
  stops: [],
  currentStopIndex: 1,
  quizAvailable: false,
  quizEnabled: false,
  finished: false
}
