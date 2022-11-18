import {TourModel} from "../../models/tour.model";
import {TourStopModel} from "../../models/tour-stop.model";

export interface CreateGamePayload {
  tour: TourModel;
  tourStops: TourStopModel[];
  quizEnabled: boolean;
}
