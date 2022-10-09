import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {
  menuExpanded: boolean = true;
  currentNavList = [];

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleExpand() {
    this.menuExpanded = !this.menuExpanded;
  }
}
