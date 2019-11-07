import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ToastyService } from 'ng2-toasty';
import { Usuario, Permissao } from 'src/app/core/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  usuario = new Usuario();

  permissao : Permissao;

  permissaoIndex : number;

  exibindoPermissao = false;

  permissoes : [];

  constructor(private service : UsuarioService,
              private toasty : ToastyService) { }

  ngOnInit() {
    this.listarPermissoess();

  }

   listarPermissoess(){
       this.service.listarPermissoes()
       .then(resposta => {
         this.permissoes = resposta.map(p => {
           return {label : p.descricao , value: p.id}
         })
       })
     }


   adicionarUsuario(form : FormControl){
      
    try{
       this.service.adicionarUsuario(this.usuario)
       form.reset();
       this.usuario = new Usuario();
       this.toasty.success('Adicionado com sucesso!');
    }catch{
      console.log('error');
    }
     }
    
     salvar(form : FormControl){
       this.adicionarUsuario(form);
       form.reset();
     }
    
    
    
      prepararNovaPermissao(){
        this.exibindoPermissao = true;
        this.permissao = new Permissao();
        this.permissaoIndex = this.usuario.permissoes.length;
      }
    
      confirmarPermissao(form : FormControl){
        this.usuario.permissoes[this.permissaoIndex] = this.clonarPermissao(this.permissao);
        this.exibindoPermissao = false;
        form.reset();
      }
    
      clonarPermissao(permissao : Permissao) : Permissao{
        return new Permissao(permissao.id, permissao.descricao);
      }
    
      removerPermissao(index : number){
        this.usuario.permissoes.splice(index, 1);
      }
    


}
