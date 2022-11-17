import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureQuizComponent } from './pure-quiz.component';

describe('PureQuizComponent', () => {
  let component: PureQuizComponent;
  let fixture: ComponentFixture<PureQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
