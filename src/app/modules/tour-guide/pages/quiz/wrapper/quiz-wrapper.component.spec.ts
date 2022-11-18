import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizWrapperComponent } from './quiz-wrapper.component';

describe('QuizWrapperComponent', () => {
  let component: QuizWrapperComponent;
  let fixture: ComponentFixture<QuizWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
