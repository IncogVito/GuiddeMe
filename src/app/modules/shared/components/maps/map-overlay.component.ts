import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {MapElement} from "../../models/map.model";

@Component({
  selector: 'app-map-overlay',
  templateUrl: './map-overlay.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class MapOverlayComponent {
  @Input() pin!: MapElement;
  @Output() enter = new EventEmitter<number>();
  @Output() leave = new EventEmitter<number>();
  @Output() clicked = new EventEmitter<MapElement>();

  get id(): number {
    return (this.pin && this.pin.index != null) ? this.pin.index : 0;
  }

  onEnter() {
    this.enter.emit(this.id);
  }

  onLeave() {
    this.leave.emit(this.id);
  }

  onClick() {
    this.clicked.emit(this.pin);
  }
}

