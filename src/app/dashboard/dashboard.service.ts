import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url = "http://localhost:8080/titulos";

  constructor(private http : HttpClient) { }

  titulosPorCategoria() : Promise<Array<any>>{
    return this.http.get<any>(`${this.url}/estatistica-categoria`)
    .toPromise()
    .then(resposta => resposta)
  }

  titulosPorDia() : Promise<any>{
    return this.http.get<any>(`${this.url}/estatistica-dia`)
    .toPromise()
    .then(resposta => {
      const dados = resposta;
      this.converterStringToDate(dados);
      return dados;
    })
  }

  private converterStringToDate(dados : any[]){
    for(const dado of dados){
      dado.dia = moment(dado.dia, 'YYYY-MM-DD').toDate();
    }
  }



}
