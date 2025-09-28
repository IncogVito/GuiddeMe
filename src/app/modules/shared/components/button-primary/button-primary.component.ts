import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  imports: [
    MatIcon
  ],
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {

  @Input()
  public label = '';

  @Input()
  public iconName = '';

  @Input()
  public reversedColor: boolean = false;

  @Input()
  public disabled: boolean = false;

  @Output()
  public btnClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.btnClick.emit();
  }
}
