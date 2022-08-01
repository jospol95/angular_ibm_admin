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
        HttpClientModule
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
