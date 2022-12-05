import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
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
