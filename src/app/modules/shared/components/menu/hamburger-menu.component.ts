import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

  @Output()
  public menuExpand = new EventEmitter<boolean>();

  menuExpanded: boolean = false;
  currentNavList = [];

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleExpand() {
    this.menuExpanded = !this.menuExpanded;
    this.menuExpand.emit(this.menuExpanded);
  }
}
