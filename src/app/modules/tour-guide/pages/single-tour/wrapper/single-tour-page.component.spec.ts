import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTourPageComponent } from './single-tour-page.component';

describe('SingleTourWrapperComponent', () => {
  let component: SingleTourPageComponent;
  let fixture: ComponentFixture<SingleTourPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTourPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
