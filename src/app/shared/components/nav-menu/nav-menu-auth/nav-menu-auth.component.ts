import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication-service";

@Component({
  selector: 'app-nav-menu-auth',
  templateUrl: './nav-menu-auth.component.html',
  styleUrls: ['./nav-menu-auth.component.scss']
})
export class NavMenuAuthComponent implements OnInit {

  constructor(public _authentication: AuthenticationService) { }

  ngOnInit() {
  }

}
