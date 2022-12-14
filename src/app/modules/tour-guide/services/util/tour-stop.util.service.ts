
import {TourStopModel} from "../../models/tour-stop.model";
import {ArrayUtilService} from "../../../shared/services/utils/array-util.service";
import {MapElement} from "../../../shared/models/map.model";
import {NumberUtilService} from "../../../shared/services/utils/number-util.service";
import {GeoPoint} from "@firebase/firestore-types";


export class TourStopUtilService {

  public static extractFileNames(tourStops: TourStopModel[]): string[] {
    return ArrayUtilService.emptyIfNull(tourStops)
      .map(singleTour => singleTour.name);
  }

  static convertCoordinatesToMapPins(orderToCoordinateMap: Map<String, GeoPoint>): MapElement[] {
    if (!orderToCoordinateMap) {
      return [];
    }

    const sortedKeys = Object.keys(orderToCoordinateMap)
      .sort();

    const result: MapElement[] = [];
    let iterator = 0;
    for (const singleKey of sortedKeys) {
      iterator++;
      result.push({
        latitude: NumberUtilService.convertToNumber((orderToCoordinateMap as any)[singleKey]._lat),
        longitude: NumberUtilService.convertToNumber((orderToCoordinateMap as any)[singleKey]._long),
        index: iterator
      })
    }
    return result;
  }

  static extractMapPins(stopList: TourStopModel[], activeIndex?: number): MapElement[] {
    const defaultIndex = NumberUtilService.convertToNumber(activeIndex, -1);

    return ArrayUtilService.emptyIfNull(stopList)
      .slice()
      .map((singleTour, index) => {
        return {
          latitude: NumberUtilService.convertToNumber(singleTour.coordinateLat),
          longitude: NumberUtilService.convertToNumber(singleTour.coordinateLng),
          index: singleTour.orderIndex,
          highlighted: index === activeIndex,
          inactive: index < defaultIndex
        }
      })
      .map(elem => {
        return elem;
      })
      .sort((a1, a2) => a1.index === (defaultIndex + 1) ? 1 : -1);
  }

  static extractRoutePins(stopList: TourStopModel[], previousIndex: number, nextIndex: number): [MapElement, MapElement] {
    const previousStop = stopList[previousIndex];
    const nextStop = stopList[nextIndex];

    return [{
      latitude: previousStop.coordinateLat,
      longitude: previousStop.coordinateLng,
      index: previousStop.orderIndex
    }, {
      latitude: nextStop.coordinateLat,
      longitude: nextStop.coordinateLng,
      index: nextStop.orderIndex
    }
    ]
  }

  public static convertToWaypoints(mapPins: MapElement[]): google.maps.DirectionsWaypoint[] {

    return mapPins.map(
      singlePin => {
        return {
          location: {
            location: {
              lat: singlePin.latitude,
              lng: singlePin.longitude
            }
          },
          stopover: false
        }
      }
    )
  }
}
