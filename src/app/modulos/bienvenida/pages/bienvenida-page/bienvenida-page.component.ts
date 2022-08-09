import { Component, OnInit } from '@angular/core';
import {CreateOrUpdateMiembroCommand} from "../../../miembros/models/create-or-update-miembro-command";
import {MiembrosService} from "../../../miembros/miembros-service";

@Component({
  selector: 'app-bienvenida-page',
  templateUrl: './bienvenida-page.component.html',
  styleUrls: ['./bienvenida-page.component.scss']
})
export class BienvenidaPageComponent implements OnInit {
  public Model = new CreateOrUpdateMiembroCommand();

  constructor(private readonly _miembroService: MiembrosService) { }

  ngOnInit() {
  }

  public resetMiembro() {
    this.Model = new CreateOrUpdateMiembroCommand();
  }

  public addMiembro() {
    this.Model.FechaConversion = this.Model.FechaNacimiento;
    this.Model.FechaPrimeraVezCongregado = this.Model.FechaNacimiento;

    this._miembroService.CreateOrUpdateMiembro(this.Model).subscribe((r) => {
        console.log('Done');
        this.resetMiembro();
    });
  }
}
