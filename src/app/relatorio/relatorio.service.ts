import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class RelatorioService {


  url = "http://localhost:8080/titulos/relatorios/por-profissional";

  constructor(private http : HttpClient) { }


  relatorioTitulosPorProfissional(inicio: Date, fim : Date){
    const params = new HttpParams()
    .append('inicio', moment(inicio).format('YYYY-MM-DD'))
    .append('fim', moment(fim).format('YYYY-MM-DD'));

    return this.http.get(this.url, {params, responseType : 'blob'})
    .toPromise();
  
  }


}
