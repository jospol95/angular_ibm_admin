import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MiembrosDetailDialogComponent} from "../../dialogs/miembros-detail-dialog/miembros-detail-dialog.component";
import {MiembrosService} from "../../miembros-service";
import {MiembroViewModel} from "../../models/miembro.view-model";

// export interface PeriodicElement {
//   Id: number;
//   Nombre: string;
//   Apellido: string;
//   Email: string;
//   Telefono1: string;
//   Genero: string;
// }
//
// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     Id: 1,
//     Nombre: 'Jose Orlando',
//     Apellido: 'Polanzo Zelada',
//     Email: 'lanjos26@gmail.com',
//     Telefono1: '71233023',
//     Genero: 'M'
//   },
//   {
//     Id: 2,
//     Nombre: 'Jose Orlando',
//     Apellido: 'Polanzo Zelada',
//     Email: 'lanjos26@gmail.com',
//     Telefono1: '71233023',
//     Genero: 'M'
//   },
//   {
//     Id: 3,
//     Nombre: 'Jose Orlando',
//     Apellido: 'Polanzo Zelada',
//     Email: 'lanjos26@gmail.com',
//     Telefono1: '71233023',
//     Genero: 'M'
//   },
// ];


@Component({
  selector: 'app-miembros-table',
  templateUrl: './miembros-table.component.html',
  styleUrls: ['./miembros-table.component.scss']
})

export class MiembrosTableComponent implements OnInit {

  displayedColumns: string[] = ['Acciones', 'Nombre', 'Apellido', 'Email', 'Telefono1', 'Genero',];
  @Input() public Model = new Array<MiembroViewModel>();
  @Output() public Reload = new EventEmitter();
  // dataSource = ELEMENT_DATA;

  // displayedColumns: string[];

  constructor(public detailsDialog: MatDialog,
              private _service: MiembrosService) {
  }

  ngOnInit(): void {

  }


  public OpenDetails(id: any) {
    // console.log(id);
    const dialogRef = this.detailsDialog.open(MiembrosDetailDialogComponent, {
      data: {miembroId: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.Reload.emit();
    });
  }
}
