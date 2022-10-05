import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntroductionPageComponent} from './pages/introduction-page/introduction-page.component';
import {RouterModule, Routes} from "@angular/router";
import {PureCategoriesComponent} from './pages/categories/pure-categories.component';
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../shared/shared.module";

export const tourGuideRoutes: Routes = [
  {
    path: 'introduction',
    canActivate: [],
    component: IntroductionPageComponent
  }
];


@NgModule({
  declarations: [
    IntroductionPageComponent,
    PureCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tourGuideRoutes),
    MatIconModule,
    SharedModule
  ]
})
export class TourGuideModule {
}
