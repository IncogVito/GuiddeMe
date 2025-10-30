import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOverlayPinPhotoComponent } from './map-overlay-pin-photo.component';

describe('MapOverlayPinPhotoComponent', () => {
  let component: MapOverlayPinPhotoComponent;
  let fixture: ComponentFixture<MapOverlayPinPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapOverlayPinPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapOverlayPinPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
