import {NgModule} from '@angular/core';
import {BienvenidaPageComponent} from './pages';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    FlexModule,
    MatButtonModule,
    // FlexLayoutModule
  ],
  declarations: [BienvenidaPageComponent]
})

export class BienvenidaModule{

}
