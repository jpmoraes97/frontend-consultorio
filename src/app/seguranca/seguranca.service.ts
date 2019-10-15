import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class SegurancaService {

  url = "http://localhost:8080/oauth/token";
  revokeUrl = "http://localhost:8080/tokens/revoke";

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



  obterNovoAccessToken() : Promise<void>{

    const headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic Y2xpZW50ZTpzM2NyM3Q=');

    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.url, body, {headers, withCredentials : true})
    .toPromise()
    .then(resposta => {
      this.armazenarToken(resposta.access_token);
      console.log('Novo Access Token Gerado');


    })
    .catch(resposta =>{
      console.error('Erro ao renovar token', resposta);
      return Promise.resolve(null);
    })
  }



  temPermissao(permissao : string){
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles){
    for(const role of roles){
      if(this.temPermissao(role)){
        return true;
      }
    }
    return false;
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }


  limparAccessToken(){
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  logout() {
    return this.http.delete(this.revokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.limparAccessToken();
      });
  }
 





}
