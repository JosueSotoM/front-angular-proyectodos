import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-ligas',
  templateUrl: './mis-ligas.component.html',
  styleUrls: ['./mis-ligas.component.css']
})
export class MisLigasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
