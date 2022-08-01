import {NgModule} from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {UsuariosPageComponent} from "./pages";
import { UsuariosTableComponent } from './components/usuarios-table/usuarios-table.component';
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    UsuariosPageComponent,
    UsuariosTableComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    CommonModule,
    MatSelectModule,
  ],
  exports :[
  ]
})

export class UsuariosModule{

}
