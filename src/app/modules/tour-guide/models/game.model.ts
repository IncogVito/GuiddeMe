import {TourModel} from "./tour.model";
import {TourStopModel} from "./tour-stop.model";

export interface GameModel {
  tour: TourModel;
  stops: TourStopModel[];
  currentStopIndex: number;
  quizAvailable: boolean;
  quizEnabled: boolean;
}
