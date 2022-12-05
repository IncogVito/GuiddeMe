import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

  @Output()
  public menuExpand = new EventEmitter<boolean>();

  @Output()
  public navigate = new EventEmitter<string[]>();

  menuExpanded: boolean = false;
  backgroundExpanded: boolean = false;
  currentNavList = [];

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleExpand() {
    if (this.menuExpanded) {
      this.hideMenu();
    } else {
      this.expandMenu();
    }
  }

  public expandMenu() {
    this.backgroundExpanded = true;
    this.menuExpand.emit(true);
    setTimeout(() => {
      this.menuExpanded = true;
    }, 300);
  }

  public hideMenu() {
    this.menuExpanded = false;
    this.menuExpand.emit(false);
    setTimeout(() => {
      this.backgroundExpanded = false;
    }, 500);
  }

  navigateDelayed(strings: string[]) {
    setTimeout(() => {
      this.menuExpand.emit(false);
      this.menuExpanded = false;
    }, 300);

    setTimeout(() => {
      this.backgroundExpanded = false;
    }, 700);

    setTimeout(() =>
        this.navigate.emit(strings),
      1100
    )

  }
}
