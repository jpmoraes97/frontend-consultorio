import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  url = "http://localhost:8080/agendamentos";

  constructor(private http : HttpClient) { }


  listar() : Promise<any>{
    return this.http.get<any>(`${this.url}?resumo`)
    .toPromise();
  }

  buscar(id : number) : Promise<any>{
    return this.http.get<any>(`${this.url}/${id}`)
    .toPromise()
    .then(resposta => {
      const agendamento = resposta;
      this.conversor([agendamento]);
      return agendamento;
    })
  }

  salvar(agendamento : any) : Promise<any>{
    return this.http.post<any>(`${this.url}`, agendamento)
    .toPromise();
  }

  atualizar(agendamento : any) : Promise<any>{
    return this.http.put<any>(`${this.url}/${agendamento.id}`, agendamento)
    .toPromise()
    .then(resposta => {
      const agendamento = resposta;
      this.conversor([agendamento]);
      return agendamento
    })
  }

  deletar(id : number) : Promise<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
    .toPromise();
  }


  private conversor(agendamentos : any[]){
    for(const agendamento of agendamentos){
      agendamento.data = moment(agendamento.data, 'YYYY-MM-DD').toDate();
      agendamento.horario = moment(agendamento.horario, 'HH:mm').format('HH:mm');
    }
  }



}
