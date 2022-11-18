import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatestWith, distinctUntilChanged, EMPTY, filter, Observable, Subject, takeUntil} from "rxjs";
import {GameState} from "../../../stores/game/game.state";
import {GameStateModel} from "../../../stores/game/game.state-model";
import {MatDialog} from "@angular/material/dialog";
import {QuestionsState} from "../../../stores/questions/questions.state";
import {QuestionsStateModel} from "../../../stores/questions/questions.state-model";
import {QuestionModel} from "../../../models/question.model";
import {PureQuizComponent} from "../pure-quiz/pure-quiz.component";

@Component({
  selector: 'guidde-me-quiz-wrapper',
  templateUrl: './quiz-wrapper.component.html',
  styleUrls: ['./quiz-wrapper.component.scss']
})
export class QuizWrapperComponent implements OnInit, OnDestroy {

  public gameState$: Observable<GameStateModel> = EMPTY;
  public questionsState$: Observable<QuestionsStateModel> = EMPTY;

  private ngDestroy$ = new Subject<void>();

  constructor(private readonly gameState: GameState,
              private readonly questionsState: QuestionsState,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.gameState$ = this.gameState.gameState$;
    this.questionsState$ = this.questionsState.questionState$;
    this.listenOnStepChanged();
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }


  private listenOnStepChanged() {
    this.gameState$.pipe(
      filter(state => state.started),
      distinctUntilChanged((prevState, currState) => prevState.currentStopIndex === currState.currentStopIndex),
      takeUntil(this.ngDestroy$),
      filter(currState => !currState.finished && currState.quizEnabled),
      combineLatestWith(this.questionsState$),
      filter(([_, questionState]) => questionState.fetched),
      filter(([gameState, questionState]) => gameState.tour.id === questionState.tourId)
    )
      .subscribe(([gameState, questionState]) => {
        const currentStop = gameState.stops[gameState.currentStopIndex - 1];
        if (currentStop.questionIds) {
          const tourQuestions = questionState.questions
            .filter(singleQuestion => currentStop.questionIds.includes(singleQuestion.id));
          const singleQuestion: QuestionModel = tourQuestions[0];
          this.dialog.open(PureQuizComponent);
        }
      })
  }

}
