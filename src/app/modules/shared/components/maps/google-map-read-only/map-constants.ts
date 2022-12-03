import {MapGeneralPosition} from "../../../models/map.model";

export const MapConstants = {
  lat: 52.230757,
  lng: 20.996398,
  zoom: 13
};

export const MAP_DEFAULT_GENERAL_POSITION: MapGeneralPosition = {
  position: {
    latitude: 50.0618212,
    longitude: 19.938209
  },
  zoom: 10
}

export const SendEventBoundConstants = new Map<number, PositionBound>([
  [15, {latBound: 0.0052, lngBound: 0.012}],
  [16, {latBound: 0.0018, lngBound: 0.008}],
  [17, {latBound: 0.0005, lngBound: 0.004}]
]);

export interface PositionBound {
  latBound: number;
  lngBound: number;
}
