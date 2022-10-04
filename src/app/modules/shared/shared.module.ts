import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonPrimaryComponent} from "./components/button-primary/button-primary.component";
import {ButtonSecondaryComponent} from "./components/button-secondary/button-secondary.component";



@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent
  ],
  exports: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent
  ],

  imports: [
    CommonModule,

  ]
})
export class SharedModule { }
