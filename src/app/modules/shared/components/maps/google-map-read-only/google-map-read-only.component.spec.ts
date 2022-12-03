import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapReadOnlyComponent } from './google-map-read-only.component';

describe('GoogleMapReadOnlyComponent', () => {
  let component: GoogleMapReadOnlyComponent;
  let fixture: ComponentFixture<GoogleMapReadOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapReadOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapReadOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
