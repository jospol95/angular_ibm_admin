import {NgModule} from "@angular/core";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {NavMenuUnauthComponent} from "./nav-menu/nav-menu-unauth/nav-menu-unauth.component";
import {NavMenuAuthComponent} from "./nav-menu/nav-menu-auth/nav-menu-auth.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    CommonModule,
    FlexModule,
    FlexLayoutModule
  ],
  exports: [
    NavMenuComponent
  ],
  declarations: [
    NavMenuComponent,
    NavMenuUnauthComponent,
    NavMenuAuthComponent,
  ]
})

export class SharedComponentsModule{

}
