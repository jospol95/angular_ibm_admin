import {NgModule} from '@angular/core';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    AuthFormComponent
  ],
  declarations: [AuthFormComponent]
})

export class AuthModule{

}
