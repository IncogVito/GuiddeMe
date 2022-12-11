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

  highlighted?: boolean;
  inactive?: boolean;
}

export interface LatLngBoundsLiteralCustom {
  east: number;
  north: number;
  south: number;
  west: number;
}
