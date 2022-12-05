import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MAP_DEFAULT_GENERAL_POSITION, MapConstants, SendEventBoundConstants} from './map-constants';
import {GoogleStyle} from './google-style';
import {MapElement, MapCoordinates, MapGeneralPosition} from "../../../models/map.model";

@Component({
  selector: 'app-google-map-read-only',
  templateUrl: './google-map-read-only.component.html',
  styleUrls: ['./google-map-read-only.component.scss']
})
export class GoogleMapReadOnlyComponent implements OnInit {

  @Output()
  antiqueChosen = new EventEmitter<any>();

  @Output()
  toggleMapExpansionTriggered = new EventEmitter<void>();

  @Input()
  public mapPins: MapElement[] = [];

  @Input()
  public mapGeneralPosition: MapGeneralPosition = MAP_DEFAULT_GENERAL_POSITION;

  @Input()
  public defaultHeightVh: number = 30;

  @Input()
  public expandedHeightVh: number = 60;

  @Input()
  public expanded: boolean = false;

  public mapHeightVh: number = 0;

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
    this.currentLatitude = this.lat;
    this.currentLongitude = this.lng;
    this.currentZoom = this.zoom;
    this.assignCurrentPositionToObject();
    this.mapHeightVh = this.defaultHeightVh;
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

    this.antiqueChosen.emit(antique);
  }

  zoomChanged(zoom: number) {

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

  public toggleMapHeight() {
    this.expanded = !this.expanded;
    console.log('Toggleuje');
    if (this.expanded) {
      console.log('Expanded', this.expandedHeightVh);
      this.mapHeightVh = this.expandedHeightVh;
    } else {
      console.log('NonExpanded', this.defaultHeightVh);
      this.mapHeightVh = this.defaultHeightVh;
    }
  }
}
