import {TourStopModel} from "../../models/tour-stop.model";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";
import {MapElement} from "../../../shared/models/map.model";
import {NumberUtilService} from "../../../shared/services/utils/number-util.service";

export class TourStopUtilService {

  public static extractFileNames(tourStops: TourStopModel[]): string[] {
    return ArrayUtilService.emptyIfNull(tourStops)
      .map(singleTour => singleTour.name);
  }

  static extractMapPins(stopList: TourStopModel[]): MapElement[] {
    return ArrayUtilService.emptyIfNull(stopList)
      .map(singleTour => {
        return {
          latitude: NumberUtilService.convertToNumber(singleTour.coordinateLat),
          longitude: NumberUtilService.convertToNumber(singleTour.coordinateLng),
          index: singleTour.orderIndex
        }
      });
  }
}
