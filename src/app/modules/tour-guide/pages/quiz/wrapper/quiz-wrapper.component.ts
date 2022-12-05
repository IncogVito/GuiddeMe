import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject, take} from "rxjs";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {QuestionModalResponse, QuestionModel} from "../../../models/question.model";
import {
  DialogDecisionData,
  DialogDecisionPrimaryComponent
} from "../../../../shared/components/dialog-decision-primary/dialog-decision-primary.component";
import {DecisionDialogResult, DecisionEnum} from "../../../../shared/models/decision.model";
import {DISABLE_QUIZ_CONFIRMATION} from "../../../commons/modal.commons";

@Component({
  selector: 'guidde-me-quiz-wrapper',
  templateUrl: './quiz-wrapper.component.html',
  styleUrls: ['./quiz-wrapper.component.scss']
})
export class QuizWrapperComponent implements OnInit, OnDestroy {

  public availableResponses: string[] = [];
  public questionText: string = '';

  private ngDestroy$ = new Subject<void>();

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: QuestionModel,
              public readonly dialogRef: MatDialogRef<QuestionModel, QuestionModalResponse>,
              private readonly matDialog: MatDialog) {
  }

  ngOnInit(): void {
    if (!this.data) {
      console.error("No data found for Dialog Decision Primary. Closing modal data.");
      this.dialogRef.close();
    }
    this.readDialogData(this.data);
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  makeAnAnswer(answerIndex: number) {
    const answer = this.availableResponses[answerIndex];
    this.dialogRef.close({
      response: answer
    })
  }

  disableQuiz() {
    this.matDialog.open<any, DialogDecisionData, DecisionDialogResult>(DialogDecisionPrimaryComponent, {
      data: DISABLE_QUIZ_CONFIRMATION,
      disableClose: true
    })
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
          if (result && DecisionEnum.YES === result.decision) {
            this.dialogRef.close({
              response: undefined,
              disableQuizRequest: true
            })
          }
        }
      );
  }

  private readDialogData(data: QuestionModel) {
    this.questionText = data.content;
    this.availableResponses = data.answers;
  }
}
