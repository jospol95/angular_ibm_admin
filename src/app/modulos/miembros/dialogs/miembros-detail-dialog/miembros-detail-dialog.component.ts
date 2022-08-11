import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CreateOrUpdateMiembroCommand} from "../../models/create-or-update-miembro-command";
import {MiembrosService} from "../../miembros-service";
import {MessageBoxService} from "../../../../shared/services/message-box.service";

@Component({
  selector: 'app-miembros-detail-dialog',
  templateUrl: './miembros-detail-dialog.component.html',
  styleUrls: ['./miembros-detail-dialog.component.scss']
})
export class MiembrosDetailDialogComponent implements OnInit {

  public Model = new CreateOrUpdateMiembroCommand();
  public success = false;
  private miembroId: number;

  constructor(
    private _service: MiembrosService,
    private _messageBoxService: MessageBoxService,
    public dialogRef: MatDialogRef<MiembrosDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { miembroId: number }) {
    this.miembroId = data.miembroId;
  }

  ngOnInit(): void {
    if (this.miembroId != null) {
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
      this._messageBoxService.showSuccessfulAlert(this.getSuccessfulMessage());
      this.dialogRef.close();
    })
  }

  private getSuccessfulMessage() {
    return this.miembroId == null ? 'Miembro agregado' : 'Miembro modificado';
  }

  private getDetails() {
    this._service.Get(this.miembroId).subscribe((m) => {
      this.Model = m;
    })
  }
}
