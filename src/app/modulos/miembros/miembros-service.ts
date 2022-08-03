import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MiembroViewModel} from "./models/miembro.view-model";
import {PaginationResultViewModel} from "../../shared/models/pagination-result-view.model";
import {CreateOrUpdateMiembroCommand} from "./models/create-or-update-miembro-command";

@Injectable()

export class MiembrosService {
  private apiUrl = environment.apiBase + 'miembros/';

  constructor(private http: HttpClient) {

  }


  public Get(pagActual: number, tamPagina: number){
    let params = new HttpParams();
    params = params.append('pagActual', pagActual);
    params = params.append('tamPagina', tamPagina)

    return this.http.get<PaginationResultViewModel<MiembroViewModel>>(this.apiUrl, {params: params});
  }

  public CreateOrUpdateMiembro(miembro: CreateOrUpdateMiembroCommand){
    return this.http.post<boolean>(this.apiUrl, miembro );
  }
}



