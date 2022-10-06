import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonPrimaryComponent} from "./components/button-primary/button-primary.component";
import {ButtonSecondaryComponent} from "./components/button-secondary/button-secondary.component";
import {TilePrimaryComponent} from "./components/tile-primary/tile-primary.component";
import {TileSecondaryComponent} from "./components/tile-secondary/tile-secondary.component";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    TilePrimaryComponent,
    TileSecondaryComponent
  ],
  exports: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    TilePrimaryComponent,
    TileSecondaryComponent
  ],

    imports: [
        CommonModule,
        MatIconModule,
    ]
})
export class SharedModule { }
