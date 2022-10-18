import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorasEjecutaService {

  constructor() { }

  carga(archivos: string[]) {
    for (let archivo of archivos) {
      let scritp = document.createElement("script");
      scritp.src = "./assets/js/ " + archivo + ".js";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(scritp);
    }
  }
}
