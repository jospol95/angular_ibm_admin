import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private amIAdmin = false;

  public isAdmin(){
    return this.amIAdmin;
  }
}
