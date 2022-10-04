import {IntroductionPageComponent} from "./pages/introduction-page/introduction-page.component";
import {Routes} from "@angular/router";

export const tourGuideRoutes: Routes = [
  {
    path: 'introduction',
    canActivate: [],
    component: IntroductionPageComponent
  }
];
