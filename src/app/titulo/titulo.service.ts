import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

export class TituloFilter{
  descricao : string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  url = "http://localhost:8080/titulos";

  constructor(private http : HttpClient) { }


  pesquisar(filtro : TituloFilter) : Promise<any>{

    let params = new HttpParams();
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if(filtro.descricao){
      params = params.set('descricao', filtro.descricao);
    }

    return this.http.get<any>(`${this.url}`, {params})
    .toPromise()
    .then(response => {
      const titulos = response['content']
      const resultado = {
        titulos,
        total : response['totalElements']
      }
      return resultado;
    })
  }

  salvar(titulo : any) : Promise<any>{
    return this.http.post<any>(`${this.url}`, titulo)
    .toPromise();
  }

  deletar(id : number) : Promise<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
    .toPromise();
  }

  buscarPorId(id : number) : Promise<any>{
    return this.http.get<any>(`${this.url}/${id}`)
    .toPromise()
    .then(resposta => {
      let titulo = resposta;
      this.converterStringParaDatas([titulo]);
      return titulo;
    })
  }

  atualizar(titulo : any) : Promise<any>{
    return this.http.put<any>(`${this.url}/${titulo.id}`, titulo)
    .toPromise()
    .then(resposta => {
      let titulo = resposta;
      this.converterStringParaDatas([titulo]);
      return titulo;
    })
  }

  private converterStringParaDatas(titulos : any[]){
    for(const titulo of titulos){
      titulo.dataVencimento = moment(titulo.dataVencimento, 'YYYY-MM-DD').toDate();

      if(titulo.dataPagamento){
        titulo.dataPagamento = moment(titulo.dataPagamento, 'YYYY-MM-DD').toDate();
      }
    }
  }




}
