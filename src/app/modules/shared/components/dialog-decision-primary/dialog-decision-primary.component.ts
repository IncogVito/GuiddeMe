import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DecisionDialogResult, DecisionEnum} from "../../models/decision.model";

export interface DialogDecisionData {
  headerTitle: string;
  htmlText: string;
  rejectButtonLabel?: string;
  acceptButtonLabel: string;
}

@Component({
  selector: 'app-dialog-decision-primary',
  templateUrl: './dialog-decision-primary.component.html',
  styleUrls: ['./dialog-decision-primary.component.scss']
})
export class DialogDecisionPrimaryComponent implements OnInit {

  @Input()
  public headerTitle: string = '';

  @Input()
  public htmlText: string = '';

  @Input()
  public rejectButtonLabel: string | undefined = '';

  @Input()
  public acceptButtonLabel: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: DialogDecisionData,
              public readonly dialogRef: MatDialogRef<DialogDecisionData, DecisionDialogResult>) {
  }

  ngOnInit(): void {
    if (!this.data) {
      console.error("No data found for Dialog Decision Primary. Closing modal data.");
      this.dialogRef.close();
    }

    this.readDialogData(this.data);
  }

  private readDialogData(data: DialogDecisionData) {
    this.headerTitle = data.headerTitle;
    this.htmlText = data.htmlText;
    this.acceptButtonLabel = data.acceptButtonLabel;
    this.rejectButtonLabel = data.rejectButtonLabel;
  }

  public reject() {
    this.dialogRef.close({decision: DecisionEnum.NO});
  }

  public accept() {
    this.dialogRef.close({decision: DecisionEnum.YES});
  }
}
