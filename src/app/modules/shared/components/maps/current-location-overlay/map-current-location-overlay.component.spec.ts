import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCurrentLocationOverlayComponent } from './map-current-location-overlay.component';

describe('MapCurrentLocationOverlayComponent', () => {
  let component: MapCurrentLocationOverlayComponent;
  let fixture: ComponentFixture<MapCurrentLocationOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapCurrentLocationOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapCurrentLocationOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
