import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegar3(){
    this.router.navigate(['/crear-ligas']);
  }
  navegar1(){
    this.router.navigate(['/mis-ligas']);
  }
  navegar2(){
    this.router.navigate(['/clasificaciones']);
  }


}
