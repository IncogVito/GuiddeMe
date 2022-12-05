import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureGameCurrentStopComponent } from './pure-game-current-stop.component';

describe('PureGameCurrentStopComponent', () => {
  let component: PureGameCurrentStopComponent;
  let fixture: ComponentFixture<PureGameCurrentStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureGameCurrentStopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureGameCurrentStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
