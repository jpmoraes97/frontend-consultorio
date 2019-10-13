import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class SegurancaService {

  url = "http://localhost:8080/oauth/token";

  jwtPayload : any;

  constructor(private http : HttpClient, private jwtHelper : JwtHelperService) {
    this.carregarToken();
   }


  login(email : string, senha : string) : Promise<void>{

    const headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic Y2xpZW50ZTpzM2NyM3Q=');

    const body = `username=${email}&password=${senha}&grant_type=password`;

    return this.http.post<any>(this.url, body, {headers, withCredentials : true})
    .toPromise()
    .then(resposta => {
      this.armazenarToken(resposta.access_token);
    })
  }


  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken(){
    const token = localStorage.getItem('token');
    if(token){
      this.armazenarToken(token);
    }
  }




}
