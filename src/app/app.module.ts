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
import {CategoriesStore} from "./modules/tour-guide/stores/categories/categories.store";

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
    NgxsModule.forRoot([CategoriesStore], {developmentMode: !environment.production,}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({disabled: environment.production,}),
    NgxsRouterPluginModule.forRoot()
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
