import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss']
})
export class ButtonSecondaryComponent implements OnInit {

  @Input()
  public label = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked() {

  }
}
