import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CreateOrUpdateMiembroCommand} from "../../models/create-or-update-miembro-command";
import {MiembrosService} from "../../miembros-service";

@Component({
  selector: 'app-miembros-detail-dialog',
  templateUrl: './miembros-detail-dialog.component.html',
  styleUrls: ['./miembros-detail-dialog.component.scss']
})
export class MiembrosDetailDialogComponent implements OnInit {

  public Model = new CreateOrUpdateMiembroCommand();
  private miembroId: number;

  constructor(
    private _service: MiembrosService,
    @Inject(MAT_DIALOG_DATA) public data: { miembroId: number }) {
    this.miembroId = data.miembroId;
  }

  ngOnInit(): void {
    if(this.miembroId!= null){
      this.getDetails();
    }
  }

  public DecideTitle() {
    if (this.miembroId !== null) {
      return 'Detalles miembro';
    }
    return 'Nuevo miembro';
  }

  public SaveMiembro() {
    //TODO Modificar estas en Backend
    this.Model.FechaConversion = this.Model.FechaNacimiento;
    this.Model.FechaPrimeraVezCongregado = this.Model.FechaNacimiento;

    this._service.CreateOrUpdateMiembro(this.Model).subscribe((r) => {
      if(r === true){
        console.log('Done');

      }
    })
  }

  private getDetails(){
    this._service.Get(this.miembroId).subscribe((m) => {
      this.Model = m;
    })
  }
}
