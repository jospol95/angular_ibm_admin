import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MiembrosDetailDialogComponent} from "../../dialogs/miembros-detail-dialog/miembros-detail-dialog.component";
import {MiembrosService} from "../../miembros-service";

@Component({
  selector: 'app-miembros-page',
  templateUrl: './miembros-page.component.html',
  styleUrls: ['./miembros-page.component.scss']
})
export class MiembrosPageComponent implements OnInit {


  constructor(public detailsDialog: MatDialog,
              private _service : MiembrosService ) {
  }

  ngOnInit(): void {

  }


  public openEmptyDialog() {
    const dialogRef = this.detailsDialog.open(MiembrosDetailDialogComponent, {
      data: {miembroId: null},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
