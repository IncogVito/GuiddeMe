import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogDecisionPrimaryComponent} from "./dialog-decision-primary.component";

@Component({
  selector: 'app-dialog-decision-primary-wrapper',
  template: '<app-button-primary (click)="triggerModal()" ' +
    'label="Trigger modal"></app-button-primary>',
})
export class DialogDecisionPrimaryWrapperComponent implements OnInit {

  @Input()
  public headerTitle: string = '';

  @Input()
  public htmlText: string = '';

  @Input()
  public rejectButtonLabel: string = '';

  @Input()
  public acceptButtonLabel: string = '';

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  triggerModal() {
    this.dialog.open(DialogDecisionPrimaryComponent, {
      data: {
        headerTitle: this.headerTitle,
        htmlText: this.htmlText,
        rejectButtonLabel: this.rejectButtonLabel,
        acceptButtonLabel: this.acceptButtonLabel
      }
    });
  }
}
