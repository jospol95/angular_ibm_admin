import {Injectable} from "@angular/core";
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})


export class MessageBoxService{

  public showSuccessfulAlert(title: string){
    Swal.fire({
      icon: 'success',
      title: title,
      showConfirmButton: true,
      timer: 2500
    })
  }


}
