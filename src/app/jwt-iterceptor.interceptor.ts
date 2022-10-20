import { Injectable, NgModule } from '@angular/core';
import {HttpRequest,  HttpHandler,  HttpEvent,  HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiConsumoService } from './services/api-consumo.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Injectable()
export class JwtIterceptorInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem('bearerToken');
    if (token){
      const newReq = request.clone(
        {
        headers: request.headers.set('Authorization','Bearer' + token)
      }
      )
      return next.handle(newReq);
    }else{
      return next.handle(request);
    }
    
  }
}

@NgModule({
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptorModule,
    multi: true
  }]
})
export class HttpRequestInterceptorModule{
}