import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureGameComponent } from './pure-game.component';

describe('PureGameComponent', () => {
  let component: PureGameComponent;
  let fixture: ComponentFixture<PureGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
