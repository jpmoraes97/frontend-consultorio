import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TituloService } from '../titulo.service';
import { ToastyService } from 'ng2-toasty';
import { ProfissionalService } from 'src/app/profissional/profissional.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novo-titulo',
  templateUrl: './novo-titulo.component.html',
  styleUrls: ['./novo-titulo.component.css']
})
export class NovoTituloComponent implements OnInit {


  formulario : FormGroup;

  profissionais : [];

  categorias : [];


  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  constructor(private tituloService : TituloService,
              private profissionalService : ProfissionalService,
              private categoriaService : CategoriaService,
              private formBuilder : FormBuilder,
              private toasty : ToastyService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params);

    const tituloId = this.route.snapshot.params['id'];
    if(tituloId){
      this.buscarTitulo(tituloId);
    }

    this.configurarFormulario();
    this.carregarProfissionais();
    this.carregarCategorias();
  }



  configurarFormulario(){
    this.formulario = this.formBuilder.group({
      id : [],
      tipo : [null, Validators.required],
      descricao : [null, Validators.required],
      dataPagamento : [],
      dataVencimento : [null, Validators.required],
      categoria : this.formBuilder.group({
        id : [null, Validators.required]
      }),
      profissional : this.formBuilder.group({
        id : [null, Validators.required]
      }),
      valor : [null, Validators.required],
      observacao : []
    })
  }

  get editando(){
    return Boolean(this.formulario.get('id').value);
  }

  salvarTitulo(){
    this.tituloService.salvar(this.formulario.value)
    .then(tituloSalvo => {
      this.toasty.success('Titulo salvo com sucesso')
      this.router.navigate(['/titulos' , tituloSalvo.id]);
      this.formulario.reset();
    })
  }

  buscarTitulo(id : number){
    this.tituloService.buscarPorId(id)
    .then(resposta => {
      this.formulario.patchValue(resposta);
    })
  }

  atualizarTitulo(){
    this.tituloService.atualizar(this.formulario.value)
    .then(titulo => {
      this.formulario.patchValue(titulo);
      this.toasty.success('Titulo atualizado com sucesso');
    })
  }

  salvar(){
    if(this.editando){
      this.atualizarTitulo();
    }else{
      this.salvarTitulo();
    }
  }

  carregarProfissionais(){
    this.profissionalService.listar()
    .then(profissionais => {
      this.profissionais = profissionais.map(p => {
        return {label : p.nome, value : p.id}
      })
    })
  }

  carregarCategorias(){
    this.categoriaService.listar()
    .then(categorias => {
      this.categorias = categorias.map(c => {
        return {label : c.nome, value : c.id}
      })
    })
  }



}
