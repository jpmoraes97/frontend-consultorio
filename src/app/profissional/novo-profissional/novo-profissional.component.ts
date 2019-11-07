import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../profissional.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { Profissional, Telefone } from 'src/app/core/model';

@Component({
  selector: 'app-novo-profissional',
  templateUrl: './novo-profissional.component.html',
  styleUrls: ['./novo-profissional.component.css']
})
export class NovoProfissionalComponent implements OnInit {

  constructor(private service : ProfissionalService,
              private toasty : ToastyService) { }


  profissional = new Profissional();


  ngOnInit() {
   // this.configurarFormulario();


  }

  /*
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
  */

 

 adicionar(frm : FormControl){
  this.service.salvar(this.profissional);
  this.toasty.success('Profissional adicionado com sucesso!')
  frm.reset();
  this.profissional = new Profissional();
}

atualizar(frm : FormControl){
  this.service.atualizar(this.profissional)
  .then(resposta => {
    this.profissional = resposta;
    this.toasty.success('Profissional atualizado com sucesso!');    
  })
}

salvar(frm : FormControl){
  this.adicionar(frm);
}





}
