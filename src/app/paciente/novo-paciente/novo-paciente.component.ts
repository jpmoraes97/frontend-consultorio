import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.css']
})
export class NovoPacienteComponent implements OnInit {

  formulario : FormGroup;

  constructor(private pacienteService : PacienteService,
              private formBuilder : FormBuilder,
              private toasty : ToastyService) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.formulario = this.formBuilder.group({
      id : [],
      nome : [null, Validators.required],
      rg : [null, Validators.required],
      cpf : [null, Validators.required],
      telefone : [],
      celular : [null, Validators.required],
      email : [],
      endereco : this.formBuilder.group({
        logradouro : [null, Validators.required],
        numero : [null, Validators.required],
        complemento : [],
        cidade : [null, Validators.required],
        estado : [null, Validators.required],
        cep : [null, Validators.required]
      })
    })
  }

  salvar(){
    this.pacienteService.salvar(this.formulario.value)
    .then(() => {
      this.toasty.success('Paciente cadastrado com sucesso');
      this.formulario.reset();
    })
  }

}
