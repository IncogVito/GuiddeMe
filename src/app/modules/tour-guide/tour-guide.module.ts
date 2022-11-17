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
import {
  PureGameStopListComponent
} from './pages/game-in-progress-page/pure/pure-game-stop-list/pure-game-stop-list.component';
import {
  PureGameCurrentStopComponent
} from './pages/game-in-progress-page/pure/pure-game-current-stop/pure-game-current-stop.component';
import {PureGameComponent} from './pages/game-in-progress-page/pure/pure-game/pure-game.component';
import {GamePageComponent} from './pages/game-in-progress-page/wrapper/game-page.component';
import { PureQuizComponent } from './pages/quiz/pure-quiz/pure-quiz.component';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";

export const tourGuideRoutes: Routes = [
  {
    path: 'introduction',
    canActivate: [],
    component: IntroductionPageComponent,
    data: {
      hideBackIcon: true,
      animation: 'MainPageAnimation'
    }
  },
  {
    title: 'Trasy',
    path: 'tours',
    canActivate: [],
    component: ToursPageComponent,
    resolve: {tours: ToursPageResolver},
    data: {animation: 'ToursPageAnimation'}
  },
  {
    title: 'Trasa',
    path: 'tour-preview',
    canActivate: [],
    component: SingleTourPageComponent,
    resolve: {tourWithStops: TourPreviewResolver},
    data: {animation: 'TourPreviewAnimation'}
  },
  {
    title: 'Aktywna trasa',
    path: 'tour-active',
    canActivate: [],
    component: GamePageComponent,
    data: {animation: 'TourActiveAnimation'}
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
    SingleTourPageComponent,
    PureGameStopListComponent,
    PureGameCurrentStopComponent,
    PureGameComponent,
    GamePageComponent,
    PureQuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tourGuideRoutes),
    MatIconModule,
    SharedModule,
    MatRadioModule,
    FormsModule
  ]
})
export class TourGuideModule {
}
