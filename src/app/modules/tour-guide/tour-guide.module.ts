import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntroductionPageComponent} from './pages/introduction-page/introduction-page.component';
import {RouterModule, Routes} from "@angular/router";
import {PureCategoriesComponent} from './pages/categories/pure/pure-categories.component';
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../shared/shared.module";
import {PureToursComponent} from './pages/tours/pure/pure-tours.component';
import {PureSingleTourComponent} from './pages/single-tour/pure/pure-single-tour.component';
import {CategoriesPageComponent} from './pages/categories/wrapper/categories-page.component';
import {ToursPageComponent} from './pages/tours/wrapper/tours-page.component';
import {ToursPageResolver} from "./resolvers/tours-page.resolver";
import {SingleTourPageComponent} from './pages/single-tour/wrapper/single-tour-page.component';
import {TourPreviewResolver} from "./resolvers/tour-preview.resolver";

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
    title: 'Trasy',
    path: 'tours',
    canActivate: [],
    component: ToursPageComponent,
    resolve: {tours: ToursPageResolver}
  },
  {
    title: 'Trasa',
    path: 'tour-preview',
    canActivate: [],
    component: SingleTourPageComponent,
    resolve: {tourWithStops: TourPreviewResolver},
  }
];


@NgModule({
  declarations: [
    IntroductionPageComponent,
    PureCategoriesComponent,
    PureToursComponent,
    PureSingleTourComponent,
    CategoriesPageComponent,
    ToursPageComponent,
    SingleTourPageComponent
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
