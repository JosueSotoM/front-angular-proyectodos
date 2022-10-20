import { Component } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { ApiConsumoService } from './services/api-consumo.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-angular-proyectodos';
  user: any;
  constructor( private userData:ApiConsumoService){
      this.userData.users().subscribe((data)=>{
        this.user = data;
      });
  }
  getUserFormData(data:any){
      console.warn(data);
      this.userData.saveUsers(data).subscribe((result)=>{
        console.warn(result)
      })
  }

}
