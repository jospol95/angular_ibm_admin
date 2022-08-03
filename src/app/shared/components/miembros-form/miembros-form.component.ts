import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreateOrUpdateMiembroCommand} from "../../../modulos/miembros/models/create-or-update-miembro-command";

@Component({
  selector: 'app-miembros-form',
  templateUrl: './miembros-form.component.html',
  styleUrls: ['./miembros-form.component.scss']
})
export class MiembrosFormComponent implements OnInit {

  @Input() public Miembro = new CreateOrUpdateMiembroCommand();
  @Output() public MiembroChange = new EventEmitter<CreateOrUpdateMiembroCommand>();
  // GeneroSelected: any;

  constructor() { }

  ngOnInit(): void {
  }

}
