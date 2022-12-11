import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MAP_DEFAULT_GENERAL_POSITION, MapConstants, SendEventBoundConstants} from './map-constants';
import {GoogleStyle} from './google-style';
import {LatLngBoundsLiteralCustom, MapCoordinates, MapElement, MapGeneralPosition} from "../../../models/map.model";
import {AgmMap} from "@agm/core";
import {NumberUtilService} from "../../../services/utils/number-util.service";
import {ArrayUtilService} from "../../../services/utils/array-util.service";
import DirectionsWaypoint = google.maps.DirectionsWaypoint;
import {TourStopUtilService} from "../../../../tour-guide/services/util/tour-stop.util.service";
import {take} from "rxjs";
import LatLngBounds = google.maps.LatLngBounds;

@Component({
  selector: 'app-google-map-read-only',
  templateUrl: './google-map-read-only.component.html',
  styleUrls: ['./google-map-read-only.component.scss']
})
export class GoogleMapReadOnlyComponent implements OnInit {

  @ViewChild(AgmMap)
  public agmMap!: AgmMap

  @Output()
  toggleMapExpansionTriggered = new EventEmitter<void>();

  @Input()
  public mapPins: MapElement[] = [];

  @Input()
  public hidePins: boolean = false;

  @Input()
  public mapGeneralPosition: MapGeneralPosition = MAP_DEFAULT_GENERAL_POSITION;

  @Input()
  public defaultHeight: string = '30vh';

  @Input()
  public expandedHeight: string = '60vh';

  @Input()
  public expanded: boolean = false;

  @Input()
  public liveLocationEnabled: boolean = false;

  @Input()
  public readonly: boolean = false;

  @Input()
  public gestureHandling: 'cooperative' | 'greedy' | 'none' | 'auto' = 'auto';

  @Input()
  public displayFullRoute: boolean = false;

  @Input()
  public latLngBounds: LatLngBoundsLiteralCustom | boolean = true;

  public mapHeight: string = '0';
  public travelMode = 'WALKING' as any;

  public directionOrigin: MapElement | undefined;
  public directionDestination: MapElement | undefined;

  public currentLivePosition: MapElement | undefined;
  public centralisedOnCurrentPosition: boolean = false;

  public convertedDirOrigin: { lat: number, lng: number } | undefined;
  public convertedDirDestination: { lat: number, lng: number } | undefined;
  public routeWaypoints: DirectionsWaypoint[] = [];

  public directionRenderOptions = {
    polylineOptions: {strokeColor: '#bd0062', strokeWeight: 6},
    suppressMarkers: true,
    preserveViewport: true
  };

  private mapInstance: google.maps.Map | undefined;

  lat = MapConstants.lat;
  lng = MapConstants.lng;
  zoom = MapConstants.zoom;
  styles = GoogleStyle;

  lastSentLatitude: number = 0;
  lastSentLongitude: number = 0;

  mapPosition: MapCoordinates = {
    latitude: 0,
    longitude: 0
  }

  currentLatitude: number = 0;
  currentLongitude: number = 0;
  currentZoom: number = 4;

  private currentMarkedAntiqueId: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.currentZoom = this.zoom;
    this.assignCurrentPositionToObject();
    this.mapHeight = this.defaultHeight;

    this.convertDirections();
    this.subscribeLiveLocation();

    this.renderFullRoute();
  }

  ngAfterViewInit() {
    console.log(this.agmMap);
    this.agmMap.mapReady
      .pipe(take(1))
      .subscribe(map => {
        this.mapInstance = map;

        if (this.displayFullRoute) {
          this.extendMapToRouteBounds(this.mapPins);
        }
      });
  }

  mouseOver(id: number) {
    const elem: Element = document.getElementById('pin-' + id)!;
    elem.classList.add('pin-label-show');
  }

  leave(id: number) {
    const elem: Element = document.getElementById('pin-' + id)!;
    elem.classList.remove('pin-label-show');

  }

  chooseAntique(antique: any) {
    if (antique.antiqueId === this.currentMarkedAntiqueId) {
      return;
    }

    this.removeCurrentMarker();
    this.addNewCurrentMarker(antique.antiqueId);
  }

  zoomChanged(zoom: number) {
    console.log(zoom);

    this.currentZoom = zoom;
    this.lastSentLongitude = this.currentLongitude;
    this.lastSentLatitude = this.currentLatitude;

    this.getAntiqueOnPosition();
    this.assignCurrentPositionToObject();
  }

  mapDragged(dragged: any) {
    this.currentLatitude = dragged.lat;
    this.currentLongitude = dragged.lng;

    this.checkIfExpandBoundAndSendEvent();
  }

  onMapReady() {
    this.getAntiqueOnPosition();
  }

  private addNewCurrentMarker(id: number) {
    this.currentMarkedAntiqueId = id;
    const elem: Element = document.getElementById('pulse-' + id)!;
    elem.classList.add('pulse-animation');
  }

  private removeCurrentMarker() {
    if (!this.currentMarkedAntiqueId) {
      return;
    }
    const elem: Element = document.getElementById('pulse-' + this.currentMarkedAntiqueId)!;

    if (elem) {
      elem.classList.remove('pulse-animation');
    }
  }

  private checkIfExpandBoundAndSendEvent() {
    if (this.currentZoom < 15 || this.currentZoom > 17 || !this.currentZoom) {
      return;
    }

    const latDifference = Math.abs(this.currentLatitude - this.lastSentLatitude);
    const lngDifference = Math.abs(this.currentLongitude - this.lastSentLongitude);

    const bound = SendEventBoundConstants.get(this.currentZoom)!;

    if (latDifference > bound.latBound || lngDifference > bound.lngBound) {

      this.lastSentLongitude = this.currentLongitude;
      this.lastSentLatitude = this.currentLatitude;

      this.emitCurrentPosition();
    }
  }

  private emitCurrentPosition() {

  }

  // Temporary
  private assignCurrentPositionToObject() {
    this.mapPosition.longitude = this.currentLongitude;
    this.mapPosition.latitude = this.currentLatitude;
  }

  private getAntiqueOnPosition() {
    const mapPosition = {
      latitude: this.currentLatitude,
      longitude: this.currentLongitude
    } as MapCoordinates;

  }

  private subscribeLiveLocation() {
    if (navigator.geolocation && this.liveLocationEnabled) {
      navigator.geolocation.watchPosition(
        (position: GeolocationPosition) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          this.currentLivePosition = {
            latitude: pos.lat,
            longitude: pos.lng,
            index: 0
          }
        },
        () => {
          // handleLocationError(true, infoWindow, map.getCenter()!);
        }
      )
    } else {
    }
  }

  public toggleMapHeight() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.mapHeight = this.expandedHeight;
    } else {
      this.mapHeight = this.defaultHeight;
    }
  }

  public renderNextRoute(origin: MapElement, destination: MapElement) {
    this.directionOrigin = origin;
    this.directionDestination = destination;
    this.convertDirections();
  }

  private convertDirections() {
    if (this.directionDestination && this.directionOrigin) {
      this.convertedDirDestination = {
        lat: this.directionDestination.latitude,
        lng: this.directionDestination.longitude
      }
      this.convertedDirOrigin = {
        lat: this.directionOrigin.latitude,
        lng: this.directionOrigin.longitude
      }
    }
  }

  toggleMapCenter() {
    this.centralisedOnCurrentPosition = !this.centralisedOnCurrentPosition;

    if (this.currentLivePosition && this.centralisedOnCurrentPosition) {
      this.mapGeneralPosition.position.latitude = NumberUtilService.convertToNumber(this.currentLivePosition?.latitude) + (0.0000000000100 * Math.random());
      this.mapGeneralPosition.position.longitude = NumberUtilService.convertToNumber(this.currentLivePosition?.longitude) + (0.0000000000100 * Math.random());
    }

    if (!this.centralisedOnCurrentPosition) {
      const activeMapElement = this.mapPins.filter(singlePin => singlePin.highlighted);

      if (ArrayUtilService.isEmpty(activeMapElement)) {
        return;
      }
      const singleActiveMapElement = ArrayUtilService.getFirstRequired(activeMapElement);
      this.mapGeneralPosition.position.latitude = NumberUtilService.convertToNumber(singleActiveMapElement.latitude) + (0.0000000000100 * Math.random());
      this.mapGeneralPosition.position.longitude = NumberUtilService.convertToNumber(singleActiveMapElement.longitude) + (0.0000000000100 * Math.random());
    }
  }

  private renderFullRoute() {
    if (ArrayUtilService.lengthOf(this.mapPins) < 2) {
      return;
    }
    const firstMapPins = ArrayUtilService.getFirstRequired(this.mapPins);
    const lastMapPins = ArrayUtilService.getLastRequired(this.mapPins);
    this.renderNextRoute(firstMapPins, lastMapPins);

    const elementsBetween = this.mapPins.slice(1, this.mapPins.length);
    this.routeWaypoints = TourStopUtilService.convertToWaypoints(elementsBetween);
  }

  private extendMapToRouteBounds(mapPins: MapElement[]) {
    const minLatitude = Math.min(...mapPins.map(singleItem => singleItem.latitude));
    const maxLatitude = Math.max(...mapPins.map(singleItem => singleItem.latitude));
    const minLongitude = Math.min(...mapPins.map(singleItem => singleItem.longitude));
    const maxLongitude = Math.max(...mapPins.map(singleItem => singleItem.longitude));

    const bounds: LatLngBounds = new google.maps.LatLngBounds();

    bounds.extend(new google.maps.LatLng(minLatitude, minLongitude));
    bounds.extend(new google.maps.LatLng(maxLatitude, maxLongitude));
    this.mapInstance?.fitBounds(bounds, 5);
  }
}
