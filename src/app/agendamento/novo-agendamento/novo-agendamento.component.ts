import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../agendamento.service';
import { ProfissionalService } from 'src/app/profissional/profissional.service';
import { PacienteService } from 'src/app/paciente/paciente.service';
import { ToastyService } from 'ng2-toasty';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.css']
})
export class NovoAgendamentoComponent implements OnInit {

  formulario : FormGroup;

  pacientes : [];

  profissionais : [];

  constructor(private agendamentoService : AgendamentoService,
              private profissionalService : ProfissionalService,
              private pacienteService : PacienteService,
              private toasty : ToastyService,
              private formBuilder : FormBuilder,
              private route : ActivatedRoute) { }

  ngOnInit() {

    let idAgendamento = this.route.snapshot.params['id'];
    
    if(idAgendamento){
      this.buscar(idAgendamento);
    }

    this.configurarFormulario();
    this.carregarPacientes();
    this.carregarProfissionais();
  }

  configurarFormulario(){
    this.formulario = this.formBuilder.group({
      id : [],
      data : [],
      horario : [],
      paciente : this.formBuilder.group({
        id : []
      }),
      profissional : this.formBuilder.group({
        id : []
      })
    })
  }

  salvarAgendamento(){
    this.agendamentoService.salvar(this.formulario.value)
    .then(() => {
      this.toasty.success('Agendamento salvo com sucesso')
      this.formulario.reset()
    })
  }

  buscar(id : number){
    this.agendamentoService.buscar(id)
    .then(agendamento => {
      this.formulario.patchValue(agendamento);
    })
  }

  atualizarAgendamento(){
    this.agendamentoService.atualizar(this.formulario.value)
    .then(agendamento => {
      this.formulario.patchValue(agendamento);
      this.toasty.success('Agendamento atualizado com sucesso');
    })
  }

  get editando(){
    return Boolean(this.formulario.get('id').value);
  }

  carregarPacientes(){
    this.pacienteService.listar()
    .then(pacientes => {
      this.pacientes = pacientes.map(p => {
        return {label : p.nome, value : p.id}
      })
    })
  }

  carregarProfissionais(){
    this.profissionalService.listar()
    .then(profissionais => {
      this.profissionais = profissionais.map(p => {
        return {label : p.nome, value : p.id}
      })
    })
  }

  salvar(){
    if(this.editando){
      this.atualizarAgendamento();
    }else{
      this.salvarAgendamento();
    }
  }



}
