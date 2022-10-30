import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {

  @Input()
  public label = '';

  @Input()
  public iconName = '';

  @Input()
  public reversedColor: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked() {

  }
}
