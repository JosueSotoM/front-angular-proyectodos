import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {ApiConsumoService} from '../services/api-consumo.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private router: Router, private userData:ApiConsumoService) { 
    this.userData.users().subscribe((data)=>{
      this.user = data;
    });
  }

  ngOnInit(): void {
  }
  navegar(){
    this.router.navigate(['/principal']);

  }
  navegar1(){
    this.router.navigate(['/registro']);
  }
  getUserFormData(data:any){
    console.warn(data);
    this.userData.saveUsers(data).subscribe((result)=>{
      console.warn(result)
    })
}



}
