import {Component, Input, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
