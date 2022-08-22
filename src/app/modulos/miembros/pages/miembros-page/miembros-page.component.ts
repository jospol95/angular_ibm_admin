import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MiembrosDetailDialogComponent} from "../../dialogs/miembros-detail-dialog/miembros-detail-dialog.component";
import {MiembrosService} from "../../miembros-service";
import {MiembroViewModel} from "../../models/miembro.view-model";
import {PaginationResultViewModel} from "../../../../shared/models/pagination-result-view.model";
import {PageEvent} from "@angular/material/paginator";
import {MessageBoxService} from "../../../../shared/services/message-box.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../shared/services/authentication-service";

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
              private _router: Router,
              public _authentication: AuthenticationService,
              private readonly _messageBoxService: MessageBoxService,
              private _service: MiembrosService) {
    this.PageViewModel.ResultsCount = 0;
  }

  ngOnInit(): void {
    this.GetMiembros();
  }


  public openDialog() {
    const dialogRef = this.detailsDialog.open(MiembrosDetailDialogComponent, {
      data: {miembroId: null},
    });

    dialogRef.afterClosed().subscribe(result => {
    //   this._messageBoxService.showSuccessfulAlert('Miembro agregado');
      this.GetMiembros();
    });
  }

  HandlePageChanged($event: PageEvent) {
    this.ItemsPerPage = $event.pageSize;
    this.CurrentPage = $event.pageIndex + 1;
    this.GetMiembros();

  }

  public goToUploadPage() {
    this._router.navigate(['ibm-admin/miembros/upload']);
  }

  public GetMiembros() {
    this._service.GetAll(this.CurrentPage, this.ItemsPerPage).subscribe((m) => {
      this.PageViewModel.Results = m.Results;
      this.PageViewModel.ResultsCount = m.ResultsCount;

    });
  }
}
