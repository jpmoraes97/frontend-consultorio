import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario, Permissao } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "http://localhost:8080/usuarios";

  constructor(private http: HttpClient) { }

  listarPermissoes() : Promise<Permissao>{
    return this.http.get<Permissao>(`${this.url}/permissoes`)
    .toPromise();
  }

  adicionarUsuario(usuario : Usuario) : Promise<Usuario>{
    return this.http.post<Usuario>(`${this.url}`, usuario)
    .toPromise();
  }


}
