import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {tourGuideRoutes} from "./modules/tour-guide/tour-guide-routing.module";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent
  },
  ...tourGuideRoutes,
  {
    path: '**',
    redirectTo: '404'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
