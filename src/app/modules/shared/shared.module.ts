import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonPrimaryComponent} from "./components/button-primary/button-primary.component";
import {ButtonSecondaryComponent} from "./components/button-secondary/button-secondary.component";
import {TilePrimaryComponent} from "./components/tile-primary/tile-primary.component";
import {TileSecondaryComponent} from "./components/tile-secondary/tile-secondary.component";
import {MatIconModule} from "@angular/material/icon";
import { HamburgerMenuComponent } from './components/menu/hamburger-menu.component';
import { TogglePrimaryComponent } from './components/toggle-primary/toggle-primary.component';
import { CardPrimaryComponent } from './components/card-primary/card-primary.component';
import { NavbarScrollComponent } from './components/navbar-scroll/navbar-scroll.component';
import {VisibleDirective} from "./directives/visible.directive";
import { OffsetFixedActivityDirective } from './directives/offset-fixed-activity.directive';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FooterPrimaryComponent } from './components/footer-primary/footer-primary.component';
import { ImageCarouselPrimaryComponent } from './components/image-carousel-primary/image-carousel-primary.component';
import { HeaderTextPrimaryComponent } from './components/header-text-primary/header-text-primary.component';



@NgModule({
  declarations: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    TilePrimaryComponent,
    TileSecondaryComponent,
    HamburgerMenuComponent,
    TogglePrimaryComponent,
    CardPrimaryComponent,
    NavbarScrollComponent,
    VisibleDirective,
    OffsetFixedActivityDirective,
    TaskListComponent,
    FooterPrimaryComponent,
    ImageCarouselPrimaryComponent,
    HeaderTextPrimaryComponent
  ],
  exports: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    TilePrimaryComponent,
    TileSecondaryComponent,
    CardPrimaryComponent,
    NavbarScrollComponent
  ],

    imports: [
        CommonModule,
        MatIconModule,
    ]
})
export class SharedModule { }
