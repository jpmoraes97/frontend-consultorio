import { Component, OnInit } from '@angular/core';
import { PacienteService, PacienteFiltro } from '../paciente.service';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/api';

@Component({
  selector: 'app-pesquisar-paciente',
  templateUrl: './pesquisar-paciente.component.html',
  styleUrls: ['./pesquisar-paciente.component.css']
})
export class PesquisarPacienteComponent implements OnInit {

  pacientes : any;

  filtro = new PacienteFiltro();

  constructor(private pacienteService : PacienteService,
              private toasty : ToastyService,
              private confirmation : ConfirmationService) { }

  ngOnInit() {
    this.listar();
  }

  pesquisar(){
    this.pacienteService.pesquisar(this.filtro)
    .then(resposta => {
      this.pacientes = resposta;
    })
  }

  listar(){
    this.pacienteService.listar()
    .then(resposta => {
      this.pacientes = resposta;
    })
  }


  confirmarExclusao(paciente : any){
    this.confirmation.confirm({
      message : 'Tem certeza que deseja excluir ?',
      accept : () => {
        this.pacienteService.deletar(paciente.id)
        .then(() => {
          this.toasty.success('Paciente deletado com sucesso');
          this.listar();
        })
      }
    })
  }

}
