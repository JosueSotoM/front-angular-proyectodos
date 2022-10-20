import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearLigasComponent } from './crear-ligas/crear-ligas.component';
import { EquiposComponent } from './equipos/equipos.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';
import { ClasificacionesComponent } from './clasificaciones/clasificaciones.component';
import { ModalCrearLigasComponent } from './modal-crear-ligas/modal-crear-ligas.component';
import { InvitarComponent } from './invitar/invitar.component';
import { UserGuardGuard } from './user-guard.guard';

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'principal', component: PrincipalComponent,canActivate:[UserGuardGuard]},
  {path: 'login',component: LoginComponent},
  {path: 'equipos',component: EquiposComponent},
  {path: 'crear-ligas', component: CrearLigasComponent},
  {path: 'clasificaciones', component: ClasificacionesComponent},
  {path: 'modal-crear-ligas', component: ModalCrearLigasComponent},
  {path: 'invitar', component: InvitarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
