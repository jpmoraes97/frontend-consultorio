import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { mergeMap, merge } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { SegurancaService } from '../seguranca.service';



export class NotAuthenticatedError {}

@Injectable()
export class AngularHttpInterceptor implements HttpInterceptor{

    constructor(private segurancaService: SegurancaService) {}

    intercept(req: import("@angular/common/http").HttpRequest<any>, next: HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>> {
       if(!req.url.includes('/oauth/token') && this.segurancaService.isAccessTokenInvalido()){
           return from(this.segurancaService.obterNovoAccessToken())
           .pipe(
               mergeMap(() => {
                   if(this.segurancaService.isAccessTokenInvalido()){
                       throw new NotAuthenticatedError();
                   }
                   req = req.clone({
                       setHeaders : {
                           Authorization : `Bearer ${localStorage.getItem('token')}`
                       }
                   });
                   return next.handle(req);
               })
           );
       }

       return next.handle(req);
    }

  
    


}