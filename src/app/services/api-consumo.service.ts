import { Injectable, NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumoService {
  url: string ="https://desarrollo-web-proyectos.herokuapp.com/auth/";


  constructor(private http:HttpClient) { }

  users(){
    let direccion = this.url + "login"
    return this.http.get(direccion);
  }

  saveUsers(data:any){
    let direccion = this.url + "login"
    return this.http.post(direccion,data);
  }
}
