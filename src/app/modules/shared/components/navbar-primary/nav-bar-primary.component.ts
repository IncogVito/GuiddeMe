import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'guidde-me-navbar-primary',
  templateUrl: './nav-bar-primary.component.html',
  styleUrls: ['./nav-bar-primary.component.scss']
})
export class NavBarPrimaryComponent implements OnInit {

  @Output()
  public back = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  backIconClicked() {
    this.back.emit();
  }
}
