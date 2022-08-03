import {NgModule} from "@angular/core";
import { MiembrosPageComponent } from './pages';
import { MiembrosTableComponent } from './components';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MiembrosDetailDialogComponent } from './dialogs/miembros-detail-dialog/miembros-detail-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MiembrosService} from "./miembros-service";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MiembrosFormComponent } from '../../shared/components/miembros-form/miembros-form.component';
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    SharedComponentsModule,
    MatExpansionModule,
    MatDatepickerModule
  ],
  declarations: [
    MiembrosPageComponent,
    MiembrosTableComponent,
    MiembrosDetailDialogComponent
  ],
  providers: [
    MiembrosService
  ]
})

export class MiembrosModule{

}
