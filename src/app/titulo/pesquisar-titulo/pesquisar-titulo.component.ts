import { Component, OnInit } from '@angular/core';
import { TituloService } from '../titulo.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pesquisar-titulo',
  templateUrl: './pesquisar-titulo.component.html',
  styleUrls: ['./pesquisar-titulo.component.css']
})
export class PesquisarTituloComponent implements OnInit {

  titulos : any;

  constructor(private tituloService : TituloService,
              private confirmation : ConfirmationService,
              private errorHandler : ErrorHandlerService,
              private toasty : ToastyService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.tituloService.listar()
    .then(resposta => {
      this.titulos = resposta.content;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }


  confirmarExclusao(titulo : any){
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir ?',
      accept : () => {
        this.tituloService.deletar(titulo.id)
        .then(() => {
          this.toasty.success('Titulo excluido com sucesso');
          this.listar();
        })
        .catch(erro => this.errorHandler.handle(erro));
      }
    })
  }

  /* 
  deletar(titulo : any){
    this.tituloService.deletar(titulo.id)
    .then(() => {
      this.toasty.success('Titulo deletado com sucesso');
      this.listar();
    })
  }
  */

}
