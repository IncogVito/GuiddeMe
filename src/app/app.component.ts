import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {ChildrenOutletContexts, Route} from "@angular/router";
import {tourGuideRouteAnimations} from "./modules/tour-guide/route-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    tourGuideRouteAnimations
  ]
})
export class AppComponent {
  title = 'GuiddeMe';

  constructor(private readonly location: Location,
              private contexts: ChildrenOutletContexts) {
  }

  goBack() {
    this.location.back();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
