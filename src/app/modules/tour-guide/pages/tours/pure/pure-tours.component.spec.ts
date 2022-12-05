import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureToursComponent } from './pure-tours.component';

describe('RoutesComponent', () => {
  let component: PureToursComponent;
  let fixture: ComponentFixture<PureToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
