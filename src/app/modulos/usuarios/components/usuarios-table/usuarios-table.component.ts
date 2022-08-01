import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Id: number;
  Usuario: string;
  Password: string;
  Email: string;
  Rol: string;
  // Genero: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Id: 1,Usuario: 'jospol05', Password: '*****', Email: 'lanjos26@gmail.com', Rol: 'Admin'},
];


@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styleUrls: ['./usuarios-table.component.scss']
})
export class UsuariosTableComponent implements OnInit {

  public EditMode = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Acciones', 'Usuario', 'Password', 'Email', 'Rol' ];
  dataSource = ELEMENT_DATA;
  // displayedColumns: string[];


}
