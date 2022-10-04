import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import {RouterModule} from "@angular/router";
import {tourGuideRoutes} from "./tour-guide-routing.module";
import { CategoriesComponent } from './pages/categories/categories.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    IntroductionPageComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tourGuideRoutes),
    MatIconModule,
  ]
})
export class TourGuideModule { }
