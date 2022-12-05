export interface MapCoordinates {
  latitude: number;
  longitude: number;
}

export interface MapGeneralPosition {
  position: MapCoordinates;
  zoom: number;
}

export interface MapElement {
  latitude: number;
  longitude: number;
  index: number;
}
