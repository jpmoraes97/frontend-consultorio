import { Component, OnInit } from '@angular/core';
import { PacienteService, PacienteFiltro } from '../paciente.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pesquisar-paciente',
  templateUrl: './pesquisar-paciente.component.html',
  styleUrls: ['./pesquisar-paciente.component.css']
})
export class PesquisarPacienteComponent implements OnInit {

  pacientes : any;

  filtro = new PacienteFiltro();

  constructor(private pacienteService : PacienteService,
              private toasty : ToastyService) { }

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

  deletar(paciente : any){
    this.pacienteService.deletar(paciente.id)
    .then(() => {
      this.toasty.success('Paciente deletado com sucesso');
      this.listar();
    })
  }

}
