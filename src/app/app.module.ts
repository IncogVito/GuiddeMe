import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {TourGuideModule} from "./modules/tour-guide/tour-guide.module";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";
import {CategoriesState} from "./modules/tour-guide/stores/categories/categories.state";
import {AngularFirestoreModule, SETTINGS as FIRESTORE_SETTINGS} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {ToursState} from "./modules/tour-guide/stores/tours/tours.state";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    TourGuideModule,
    RouterOutlet,
    AppRoutingModule,
    NgxsModule.forRoot([CategoriesState, ToursState], {developmentMode: !environment.production,}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({disabled: environment.production,}),
    NgxsRouterPluginModule.forRoot(),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    {
      provide: FIRESTORE_SETTINGS,
      useValue: environment.emulator ? {
        host: 'localhost:7200',
        ssl: false
      } : undefined
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
