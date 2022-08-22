import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedPagesModule} from "./shared/pages/shared-pages.module";
import {UnauthenticatedPageComponent} from "./shared/pages";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: UnauthenticatedPageComponent
  },
  {
    path: 'ibm-admin',
    loadChildren: () => import('./shared/pages/main/main-nav.routing.module').then((m) => m.MainNavRouting)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedPagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
