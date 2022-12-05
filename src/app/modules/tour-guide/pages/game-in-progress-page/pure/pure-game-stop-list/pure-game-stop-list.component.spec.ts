import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureGameStopListComponent } from './pure-game-stop-list.component';

describe('PureGameStopListComponent', () => {
  let component: PureGameStopListComponent;
  let fixture: ComponentFixture<PureGameStopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureGameStopListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureGameStopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
