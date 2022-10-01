import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {

  @Input()
  public label = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked() {

  }
}
