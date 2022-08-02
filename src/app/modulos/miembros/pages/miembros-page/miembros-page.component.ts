import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MiembrosDetailDialogComponent} from "../../dialogs/miembros-detail-dialog/miembros-detail-dialog.component";
import {MiembrosService} from "../../miembros-service";
import {MiembroViewModel} from "../../models/miembro.view-model";
import {PaginationResultViewModel} from "../../../../shared/models/pagination-result-view.model";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-miembros-page',
  templateUrl: './miembros-page.component.html',
  styleUrls: ['./miembros-page.component.scss']
})
export class MiembrosPageComponent implements OnInit {

  public PageViewModel = new PaginationResultViewModel<MiembroViewModel>();
  // public TotalResult = 0;
  public ItemsPerPage = 10;
  public CurrentPage = 1;

  constructor(public detailsDialog: MatDialog,
              private _service : MiembrosService ) {
    this.PageViewModel.ResultsCount = 0;
  }

  ngOnInit(): void {
    this.getMiembros();
  }


  public openEmptyDialog() {
    const dialogRef = this.detailsDialog.open(MiembrosDetailDialogComponent, {
      data: {miembroId: null},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  HandlePageChanged($event: PageEvent) {
    this.ItemsPerPage = $event.pageSize;
    this.CurrentPage = $event.pageIndex + 1;
    this.getMiembros();
  }

  private getMiembros(){
    this._service.Get(this.CurrentPage, this.ItemsPerPage).subscribe((m) => {
      this.PageViewModel.Results = m.Results;
      this.PageViewModel.ResultsCount = m.ResultsCount;
    });
  }
}
