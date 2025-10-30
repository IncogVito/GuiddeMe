import {Component, Input, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  imports: [
    MatIcon
  ],
  styleUrls: ['./button-secondary.component.scss']
})
export class ButtonSecondaryComponent implements OnInit {

  @Input()
  public label = '';

  @Input()
  public iconName = '';

  @Input()
  public disabled: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked() {

  }
}
