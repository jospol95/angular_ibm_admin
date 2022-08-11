import {NgModule} from "@angular/core";
import {InicioPageComponent} from "./pages";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    MatListModule,
    RouterModule
  ],
    declarations: [InicioPageComponent]
})

export class InicioModule{

}
