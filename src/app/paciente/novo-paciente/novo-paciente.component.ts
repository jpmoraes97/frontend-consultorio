import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { Paciente, Responsavel, Telefone } from 'src/app/core/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.css']
})
export class NovoPacienteComponent implements OnInit {

  paciente = new Paciente();

  responsavel : Responsavel;

  exibindo = false;

  responsavelIndex : number;

  
  telefone : Telefone;

  exibindoTelefone = false;

  telefoneIndex : number;


  tipos : any[];
 

  constructor(private service : PacienteService, private route : ActivatedRoute) { }

  ngOnInit() {
   
    const id = this.route.snapshot.params['id'];
   if(id){
     this.buscar(id);
   }

  this.tipos = [
    {label: 'Celular', value: 'Celular'},
    {label: 'Residencial', value: 'Residencial'},
    {label: 'Comercial', value: 'Comercial'}

  ]

  }

  get editando(){
    return Boolean (this.paciente.id)
  }

  adicionar(frm : FormControl){
    this.service.salvar(this.paciente);
    alert('Paciente adicionado com sucesso')
    frm.reset();
    this.paciente = new Paciente();
  }

  atualizar(frm : FormControl){
    this.service.atualizar(this.paciente);
    alert('Paciente atualizado com sucesso');
  }

  salvar(frm : FormControl){
    if(this.editando){
    this.atualizar(frm);
    }else{
    this.adicionar(frm);
    }
  }
  
  buscar(id : number){
    this.service.buscar(id)
    .then(response => {
      this.paciente = response;
    })
  }

  prepararNovoResponsavel(){
    this.exibindo = true;
    this.responsavel = new Responsavel();
    this.responsavelIndex = this.paciente.responsaveis.length;
  }

  confirmarResponsavel(frm : FormControl){
    this.paciente.responsaveis[this.responsavelIndex] = this.clonarResponsavel(this.responsavel);
    this.exibindo = false;
    frm.reset();
  }

  clonarResponsavel(responsavel : Responsavel) : Responsavel{
    return new Responsavel(responsavel.id, responsavel.nome, responsavel.grauParentesco, responsavel.celular);
  }

  prepararEdicaoResponsavel(responsavel : Responsavel, index : number){
    this.responsavel = this.clonarResponsavel(responsavel);
    this.exibindo = true;
    this.responsavelIndex = index;
  }

  removerResponsavel(index : number){
    this.paciente.responsaveis.splice(index, 1);
  }






  prepararNovoTelefone(){
    this.exibindoTelefone = true;
    this.telefone = new Telefone();
    this.telefoneIndex = this.paciente.telefones.length;
  }

  confirmarTelefone(frm : FormControl){
    this.paciente.telefones[this.telefoneIndex] = this.clonarTelefone(this.telefone);
    this.exibindoTelefone = false;
    frm.reset();
  }

  clonarTelefone(telefone : Telefone) : Telefone{
    return new Telefone(telefone.id, telefone.tipo, telefone.numero);
  }

  prepararEdicaoTelefone(telefone : Telefone, index : number){
    this.telefone = this.clonarTelefone(telefone);
    this.exibindoTelefone = true;
    this.telefoneIndex = index;
  }

  removerTelefone(index : number){
    this.paciente.telefones.splice(index, 1);
  }




  }
