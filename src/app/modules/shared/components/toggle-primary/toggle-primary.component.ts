import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-primary',
  templateUrl: './toggle-primary.component.html',
  styleUrls: ['./toggle-primary.component.scss']
})
export class TogglePrimaryComponent implements OnInit {

  @Input()
  public toggled: boolean = false;

  @Input()
  public leftLabel: string = '';

  @Input()
  public rightLabel: string = '';

  @Output()
  public toggle = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  doToggleAction() {
    this.toggled = !this.toggled;
    this.toggle.emit(this.toggled);
  }
}
