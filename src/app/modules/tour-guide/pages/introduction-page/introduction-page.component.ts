import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WindowUtilService} from "../../../shared/services/utils/window-util.service";

@Component({
  selector: 'app-introduction-page',
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.scss']
})
export class IntroductionPageComponent implements OnInit, AfterViewInit {

  public showIntroduction: boolean = true; // TODO redux

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    WindowUtilService.scrollToElementOfId('mine');
  }

  swipeDown() {
    WindowUtilService.scrollToElementOfId('category-section-id', 'start');
    setTimeout(() => this.showIntroduction = false, 500);
  }
}
