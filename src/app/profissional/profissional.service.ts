import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profissional } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  url = "http://localhost:8080/profissionais";

  constructor(private http : HttpClient) { }

  listar() : Promise<any>{
    return this.http.get<any>(`${this.url}`)
    .toPromise();
  }


  salvar(profissional : any) : Promise<any>{
    return this.http.post<any>(`${this.url}`, profissional)
    .toPromise();
  }


  atualizar(profissional : Profissional) : Promise<Profissional>{
    return this.http.put<Profissional>(`${this.url}/${profissional.id}`, profissional)
    .toPromise()
  }


  deletar(id : number) : Promise<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
    .toPromise();
  }

}
