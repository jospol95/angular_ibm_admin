import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  loginValid: boolean = true;
  username: any;
  password: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
