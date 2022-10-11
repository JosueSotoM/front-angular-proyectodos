import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearLigasComponent } from './crear-ligas/crear-ligas.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { EquiposComponent } from './equipos/equipos.component';
import { Routes } from '@angular/router';
import { ModalCrearLigasComponent } from './modal-crear-ligas/modal-crear-ligas.component';
import { InvitarComponent } from './invitar/invitar.component';

const appRoutes:Routes=[];
@NgModule({
  declarations: [
    AppComponent,
    CrearLigasComponent,
    RegistroComponent,
    LoginComponent,
    PrincipalComponent,
    EquiposComponent,
    ModalCrearLigasComponent,
    InvitarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
