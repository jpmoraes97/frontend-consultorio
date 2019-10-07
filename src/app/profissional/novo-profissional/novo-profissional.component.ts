import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../profissional.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-novo-profissional',
  templateUrl: './novo-profissional.component.html',
  styleUrls: ['./novo-profissional.component.css']
})
export class NovoProfissionalComponent implements OnInit {

  constructor(private profissionalService : ProfissionalService,
              private formBuilder : FormBuilder,
              private toasty : ToastyService) { }

  formulario : FormGroup;

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
    this.profissionalService.salvar(this.formulario.value)
    .then(() => {
      this.toasty.success('Profissional cadastrado com sucesso')
      this.formulario.reset();
    })
  }



}
