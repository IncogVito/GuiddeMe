import {Component, Input, OnInit} from '@angular/core';
import {NavItemModel} from "../../models/nav-item.model";
import {WindowUtilService} from "../../services/utils/window-util.service";
import {GoogleMapReadOnlyComponent} from "../maps/google-map-read-only/google-map-read-only.component";
import {VisibleDirective} from "../../directives/visible.directive";
import {OffsetFixedActivityDirective} from "../../directives/offset-fixed-activity.directive";

@Component({
  selector: 'app-navbar-scroll',
  templateUrl: './navbar-scroll.component.html',
  imports: [
    GoogleMapReadOnlyComponent,
    VisibleDirective,
    OffsetFixedActivityDirective
  ],
  styleUrls: ['./navbar-scroll.component.scss']
})
export class NavbarScrollComponent implements OnInit {

  @Input()
  public navigationList: NavItemModel[] = [];

  public activeIndex: number = 0;
  public navigationFixed: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  scrollInto(navItem: NavItemModel) {
    WindowUtilService.scrollToElementOfIdWithOffset(navItem.mainTextTitle, -100);
  }

  changeActivity(index: number) {
    this.activeIndex = index;
  }

  changeState(shouldBeFixed: boolean) {
    this.navigationFixed = shouldBeFixed;
  }
}
