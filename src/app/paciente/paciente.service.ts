import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Paciente } from '../core/model';


export class PacienteFiltro{
  nome : string;
}

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url = "http://localhost:8080/pacientes";

  constructor(private http : HttpClient) { }



  pesquisar(filtro : PacienteFiltro) : Promise<any>{
    let params = new HttpParams();
    
    if(filtro.nome){
      params = params.append('nome', filtro.nome)
    }
    return this.http.get<any>(`${this.url}`, {params})
    .toPromise()
  }




  listar() : Promise<any>{
      return this.http.get<any>(`${this.url}`)
      .toPromise();
  }

  salvar(paciente : any){
    return this.http.post<any>(`${this.url}`, paciente)
    .toPromise();
  }

  deletar(id : number) : Promise<void>{
    return this.http.delete<any>(`${this.url}/${id}`)
    .toPromise();
  }

  buscar(id : number) : Promise<Paciente>{
    return this.http.get<Paciente>(`${this.url}/${id}`)
    .toPromise();
  }

  atualizar(paciente : Paciente) : Promise<Paciente>{
    return this.http.put<Paciente>(`${this.url}/${paciente.id}`, paciente)
    .toPromise();
  }


}
