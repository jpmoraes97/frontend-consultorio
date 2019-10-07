import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../profissional.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pesquisar-profissional',
  templateUrl: './pesquisar-profissional.component.html',
  styleUrls: ['./pesquisar-profissional.component.css']
})
export class PesquisarProfissionalComponent implements OnInit {


  profissionais : any;

  constructor(private profissionalService : ProfissionalService,
              private toasty : ToastyService) { }

  ngOnInit() {
    this.listar();
  }
  

  listar(){
    this.profissionalService.listar()
    .then(resposta => {
      this.profissionais = resposta;
    })
  }

  deletar(profissional : any){
    this.profissionalService.deletar(profissional.id)
    .then(() => {
      this.toasty.success('Profissional deletado com sucesso');
      this.listar();
    })
  }


}
