import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorasEjecutaService } from "./../horas-ejecuta.service";

@Component({
  selector: 'app-clasificaciones',
  templateUrl: './clasificaciones.component.html',
  styleUrls: ['./clasificaciones.component.css']
})
export class ClasificacionesComponent implements OnInit {

  constructor(private router: Router,private _hora:HorasEjecutaService) {
   _hora.carga(["/horario"]);
  }

  ngOnInit(): void {
  }
  navegar() {
    this.router.navigate(['principal']);
  }
}
