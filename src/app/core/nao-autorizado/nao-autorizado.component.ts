import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  template: `
  <div class="container">
    <h1 class="text-center">Acesso negado!</h1>
    <a href="javascript:;" (click)="voltar()">Voltar</a>
  </div>
  `,
})
export class NaoAutorizadoComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
  }

  voltar(){
    this.location.back();
  }

}
