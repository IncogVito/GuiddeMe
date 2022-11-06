import {TourStopModel} from "../../models/tour-stop.model";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";

export class TourStopUtilService {

  public static extractFileNames(tourStops: TourStopModel[]): string[] {
    return ArrayUtilService.emptyIfNull(tourStops)
      .map(singleTour => singleTour.name);
  }
}
