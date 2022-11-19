import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {combineLatestWith, distinctUntilChanged, EMPTY, filter, Observable, Subject, take, takeUntil} from "rxjs";
import {GameStateModel} from "../../stores/game/game.state-model";
import {GameState} from "../../stores/game/game.state";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogDecisionData,
  DialogDecisionPrimaryComponent
} from "../../../shared/components/dialog-decision-primary/dialog-decision-primary.component";
import {
  createModalFinishedData,
  ENABLE_QUIZ_DATA
} from "../../commons/modal.commons";
import {DecisionDialogResult, DecisionEnum} from "../../../shared/models/decision.model";
import {Store} from "@ngxs/store";
import {GameActions} from "../../stores/game/game.actions";
import {QuestionModalResponse, QuestionModel} from "../../models/question.model";
import {QuestionsStateModel} from "../../stores/questions/questions.state-model";
import {QuestionsState} from "../../stores/questions/questions.state";
import {QuizWrapperComponent} from "../../pages/quiz/wrapper/quiz-wrapper.component";
import {Navigate} from "@ngxs/router-plugin";

@Injectable()
export class GameModalHelperService implements OnInit, OnDestroy {

  public gameState$: Observable<GameStateModel> = EMPTY;
  public questionsState$: Observable<QuestionsStateModel> = EMPTY;
  private ngDestroy$ = new Subject<void>();

  constructor(private readonly store: Store,
              private readonly dialog: MatDialog,
              private readonly gameState: GameState,
              private readonly questionsState: QuestionsState) {
  }

  ngOnInit(): void {
    this.gameState$ = this.gameState.gameState$;
    this.questionsState$ = this.questionsState.questionState$;
    this.listenShowQuizEnablingModal();
    this.listenShowQuestionModal();
    this.listenOnGameFinished();
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  private listenShowQuizEnablingModal() {
    this.gameState$.pipe(
      takeUntil(this.ngDestroy$),
      filter(state => state.started),
      take(1),
      filter(state => state.quizAvailable),
    )
      .subscribe(() => this.openEnablingQuizModal());
  }

  private openEnablingQuizModal() {
    this.dialog.open<any, DialogDecisionData, DecisionDialogResult>(DialogDecisionPrimaryComponent, {
      data: ENABLE_QUIZ_DATA,
      disableClose: true
    })
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
          if (result && DecisionEnum.YES === result.decision) {
            this.store.dispatch(new GameActions.EnableQuiz());
          } else {
            this.store.dispatch(new GameActions.DisableQuiz());
          }
        }
      );
  }

  private listenShowQuestionModal() {
    this.gameState$.pipe(
      filter(state => state.started),
      distinctUntilChanged((prevState, currState) => prevState.currentStopIndex === currState.currentStopIndex
        && prevState.currentStopQuizRequested === currState.currentStopQuizRequested // TODO refactor
      ),
      takeUntil(this.ngDestroy$),
      filter(currState => !currState.finished && currState.quizEnabled && currState.currentStopQuizRequested),
      combineLatestWith(this.questionsState$),
      filter(([_, questionState]) => questionState.fetched),
      filter(([gameState, questionState]) => gameState.tour.id === questionState.tourId)
    )
      .subscribe(([gameState, questionState]) => {
        const currentStop = gameState.stops[gameState.currentStopIndex - 1];
        if (currentStop.questionIds) {
          const tourQuestions = questionState.questions
            .filter(singleQuestion => currentStop.questionIds.includes(singleQuestion.id));

          const randomQuestionIndex = Math.floor(Math.random() * tourQuestions.length);
          const singleQuestion: QuestionModel = tourQuestions[randomQuestionIndex];
          this.dialog.open<any, QuestionModel, QuestionModalResponse>(QuizWrapperComponent, {
            data: singleQuestion,
            disableClose: true
          })
            .afterClosed()
            .pipe(take(1))
            .subscribe(result => this.handleQuestionModalClosed(result))

        } else {
          this.store.dispatch(new GameActions.DoNextStop());
        }
      })
  }

  private handleQuestionModalClosed(result: QuestionModalResponse | undefined) {
    if (!result) {
      this.store.dispatch(new GameActions.DoNextStop());
    }
    if (result!.disableQuizRequest) {
      this.store.dispatch(new GameActions.DisableQuiz());
      this.store.dispatch(new GameActions.DoNextStop());
    } else {
      this.store.dispatch(new GameActions.DoNextStop());
    }
  }

  private listenOnGameFinished() {
    this.gameState$.pipe(
      filter(state => state.finished),
      takeUntil(this.ngDestroy$),
      take(1)
    ).subscribe((finishedState) => {
      this.dialog.open(DialogDecisionPrimaryComponent, {
        data: createModalFinishedData(finishedState.tour.title)
      })
        .afterClosed()
        .pipe(take(1))
        .subscribe(() => this.handleFinishedGame())
    })
  }

  private handleFinishedGame() {
    this.store.dispatch(new Navigate(['']));
  }
}
