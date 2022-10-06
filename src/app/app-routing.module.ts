import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full'
  },
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
