import {Component, Input} from '@angular/core';

@Component({
  selector: 'guidde-me-map-overlay-pin-photo',
  imports: [],
  templateUrl: './map-overlay-pin-photo.component.html',
  styleUrl: './map-overlay-pin-photo.component.scss'
})
export class MapOverlayPinPhotoComponent {
  @Input() index!: number;
  @Input() highlighted = false;
  @Input() inactive = false;

  onClick() {
    console.log(`Clicked pin #${this.index}`);
  }
}
