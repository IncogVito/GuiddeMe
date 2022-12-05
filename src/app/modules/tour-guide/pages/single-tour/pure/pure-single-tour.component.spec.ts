import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSingleTourComponent } from './pure-single-tour.component';

describe('SingleTourComponent', () => {
  let component: PureSingleTourComponent;
  let fixture: ComponentFixture<PureSingleTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureSingleTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureSingleTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
