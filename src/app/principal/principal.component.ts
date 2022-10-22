import { Component, OnInit } from '@angular/core';
import { Route, Router,ActivatedRoute  } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  currentUser: Object = {};
  constructor(
    private router: Router,
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res) => {
      this.currentUser = res.msg;
    });
  }
  // constructor(private router: Router) { }

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
