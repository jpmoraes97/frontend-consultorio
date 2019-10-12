import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../relatorio.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  inicio : Date;
  fim : Date;

  constructor(private relatorioService : RelatorioService) { }

  ngOnInit() {
  }

  gerar(){
    this.relatorioService.relatorioTitulosPorProfissional(this.inicio, this.fim)
    .then(relatorio => {
      const url = window.URL.createObjectURL(relatorio);
      window.open(url);
    });
  }


}
