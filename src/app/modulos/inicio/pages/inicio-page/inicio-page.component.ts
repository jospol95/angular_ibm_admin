import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../shared/services/authentication-service";

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.scss']
})
export class InicioPageComponent implements OnInit {

  constructor(public _authentication: AuthenticationService) { }

  ngOnInit(): void {

  }

}
