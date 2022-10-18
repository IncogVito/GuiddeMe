import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntroductionPageComponent} from './pages/introduction-page/introduction-page.component';
import {RouterModule, Routes} from "@angular/router";
import {PureCategoriesComponent} from './pages/categories/pure/pure-categories.component';
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../shared/shared.module";
import {PureToursComponent} from './pages/tours/pure/pure-tours.component';
import {SingleTourComponent} from './pages/single-tour/single-tour.component';
import {CategoriesPageComponent} from './pages/categories/wrapper/categories-page.component';
import { ToursPageComponent } from './pages/tours/wrapper/tours-page.component';

export const tourGuideRoutes: Routes = [
  {
    path: 'introduction',
    canActivate: [],
    component: IntroductionPageComponent
  },
  {
    path: 'categories',
    canActivate: [],
    component: CategoriesPageComponent
  },
  {
    path: 'category/:categoryId',
    canActivate: [],
    component: ToursPageComponent
  },
];


@NgModule({
  declarations: [
    IntroductionPageComponent,
    PureCategoriesComponent,
    PureToursComponent,
    SingleTourComponent,
    CategoriesPageComponent,
    ToursPageComponent
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
