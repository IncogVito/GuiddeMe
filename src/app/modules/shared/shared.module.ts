import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonPrimaryComponent} from "./components/button-primary/button-primary.component";
import {ButtonSecondaryComponent} from "./components/button-secondary/button-secondary.component";
import {TilePrimaryComponent} from "./components/tile-primary/tile-primary.component";
import {TileSecondaryComponent} from "./components/tile-secondary/tile-secondary.component";
import {MatIconModule} from "@angular/material/icon";
import {HamburgerMenuComponent} from './components/menu/hamburger-menu.component';
import {TogglePrimaryComponent} from './components/toggle-primary/toggle-primary.component';
import {CardPrimaryComponent} from './components/card-primary/card-primary.component';
import {NavbarScrollComponent} from './components/navbar-scroll/navbar-scroll.component';
import {VisibleDirective} from "./directives/visible.directive";
import {OffsetFixedActivityDirective} from './directives/offset-fixed-activity.directive';
import {TaskListComponent} from './components/task-list/task-list.component';
import {FooterPrimaryComponent} from './components/footer-primary/footer-primary.component';
import {ImageCarouselPrimaryComponent} from './components/image-carousel-primary/image-carousel-primary.component';
import {HeaderTextPrimaryComponent} from './components/header-text-primary/header-text-primary.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DialogDecisionPrimaryComponent} from './components/dialog-decision-primary/dialog-decision-primary.component';
import {
  DialogDecisionPrimaryWrapperComponent
} from "./components/dialog-decision-primary/dialog-decision-primary-wrapper.component";
import {SkeletonLoaderComponent} from "./components/skeleton-loader/skeleton-loader.component";
import {SkeletonDirective} from "./directives/skeleton.directive";
import {NavBarPrimaryComponent} from './components/navbar-primary/nav-bar-primary.component';
import {AddClassOnActionDirective} from "./directives/add-class-on-action.directive";
import {RouterLinkWithHref} from "@angular/router";
import {SvgShapePrimaryComponent} from './svg-shapes/svg-shape-primary/svg-shape-primary.component';
import {SwipeRecogniseDirective} from './directives/swipe-recognise.directive';
import {GoogleMapReadOnlyComponent} from "./components/maps/google-map-read-only/google-map-read-only.component";
import {AgmOverlays} from "agm-overlays";
import {AgmCoreModule} from "@agm/core";


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
    HeaderTextPrimaryComponent,
    DialogDecisionPrimaryComponent,
    DialogDecisionPrimaryWrapperComponent,
    SkeletonLoaderComponent,
    SkeletonDirective,
    NavBarPrimaryComponent,
    AddClassOnActionDirective,
    SvgShapePrimaryComponent,
    SwipeRecogniseDirective,
    GoogleMapReadOnlyComponent
  ],
  exports: [
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    TilePrimaryComponent,
    TileSecondaryComponent,
    CardPrimaryComponent,
    NavbarScrollComponent,
    SkeletonDirective,
    TogglePrimaryComponent,
    TaskListComponent,
    FooterPrimaryComponent,
    ImageCarouselPrimaryComponent,
    HeaderTextPrimaryComponent,
    NavBarPrimaryComponent,
    SvgShapePrimaryComponent
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    RouterLinkWithHref,
    AgmOverlays,
    AgmCoreModule
  ]
})
export class SharedModule {
}
