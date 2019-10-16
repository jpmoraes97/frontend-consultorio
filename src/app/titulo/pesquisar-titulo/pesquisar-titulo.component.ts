import { Component, OnInit, ViewChild } from '@angular/core';
import { TituloService, TituloFilter } from '../titulo.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import {LazyLoadEvent} from 'primeng/components/common/api';
import { Table } from 'primeng/components/table/table';

@Component({
  selector: 'app-pesquisar-titulo',
  templateUrl: './pesquisar-titulo.component.html',
  styleUrls: ['./pesquisar-titulo.component.css']
})
export class PesquisarTituloComponent implements OnInit {

  @ViewChild('tabela', {static: true}) grid: Table;


  titulos : any;

  filtro = new TituloFilter();

  totalRegistros = 0;

  constructor(private tituloService : TituloService,
              private confirmation : ConfirmationService,
              private errorHandler : ErrorHandlerService,
              private toasty : ToastyService) { }

  ngOnInit() {
    //this.listar();
  }

  pesquisar(pagina = 0){
    this.filtro.pagina = pagina;
    this.tituloService.pesquisar(this.filtro)
    .then(response => {
      this.titulos = response.titulos;
      this.totalRegistros = response.total;
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
          this.grid.reset();
        })
        .catch(erro => this.errorHandler.handle(erro));
      }
    })
  }

  aoMudarPagina(event : LazyLoadEvent){
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
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
