import {NgModule} from "@angular/core";
import {InicioPageComponent} from "./pages";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
    imports: [
        MatListModule,
        RouterModule,
        CommonModule,
        MatGridListModule
    ],
    declarations: [InicioPageComponent]
})

export class InicioModule{

}
