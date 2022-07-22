import {NgModule} from '@angular/core';
import {AnonymousLayoutComponent} from './anonymous-layout/anonymous-layout.component';
import {UnauthenticatedPageComponent} from './index';
import {NavMenuAuthComponent, NavMenuComponent, NavMenuUnauthComponent} from '../components';
import {AuthModule} from '../../modulos/auth/auth.module';
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SharedComponentsModule} from "../components/shared-components.module";

@NgModule({
  imports: [
    AuthModule,
    RouterModule,
    MatToolbarModule,
    SharedComponentsModule,
  ],
  declarations: [
    AnonymousLayoutComponent,
    UnauthenticatedPageComponent,
    MainComponent]
})

export class SharedPagesModule {

}
