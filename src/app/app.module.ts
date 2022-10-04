import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TilePrimaryComponent} from './modules/shared/components/tile-primary/tile-primary.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {TileSecondaryComponent} from './modules/shared/components/tile-secondary/tile-secondary.component';
import {ButtonPrimaryComponent} from './modules/shared/components/button-primary/button-primary.component';
import {ButtonSecondaryComponent} from './modules/shared/components/button-secondary/button-secondary.component';
import {TourGuideModule} from "./modules/tour-guide/tour-guide.module";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TilePrimaryComponent,
    TileSecondaryComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    TourGuideModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
