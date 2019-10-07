import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData : any;
  lineChartData;

  constructor(private dashboardService : DashboardService) { }

  ngOnInit() {
    this.configurarGraficoPizza();
    this.configurarGraficoLinha();
  }



  configurarGraficoPizza(){
    this.dashboardService.titulosPorCategoria()
    .then(resposta => {
      this.pieChartData = {
        labels : resposta.map(dado => dado.categoria.nome),
        datasets : [
          {
            data : resposta.map(dado => dado.total),
            backgroundColor : ['#FF9900', '#109618', '#990099', '#3B3EAC']
          }
        ]
      };
    })
  }

  configurarGraficoLinha(){
    this.dashboardService.titulosPorDia()
    .then(resposta => {
      const diasDoMes = this.configurarDiasMes();
      const totaisReceitas = this.totaisPorCadaDiaMes(
        resposta.filter(dado => dado.tipo == 'RECEITA'), diasDoMes);
      const totaisDespesas = this.totaisPorCadaDiaMes(
        resposta.filter(dado => dado.tipo == 'DESPESA'), diasDoMes);

      this.lineChartData = {
        labels : diasDoMes ,
        datasets : [
          {
            label : 'Receitas',
            data : totaisReceitas,
            borderColor : 'blue'
          },
          {
            label : 'Despesas',
            data : totaisDespesas,
            borderColor : 'red'
          }
  
        ]
      };
    })
  }

  private totaisPorCadaDiaMes(dados, diasDoMes){
    const totais : number[] = [];
    for(const dia of diasDoMes){
      let total = 0;

      for(const dado of dados){
        if(dado.dia.getDate() == dia){
          total = dado.total;
          break;
        }
      }
      totais.push(total);
    }
    return totais;
  }


  private configurarDiasMes(){
    const mesReferencia = new Date();
    mesReferencia.setMonth(mesReferencia.getMonth() + 1);
    mesReferencia.setDate(0);

    const quantidadeDias = moment().daysInMonth();

    const dias : number[] = [];

    for(let i = 1; i <= quantidadeDias; i++){
      dias.push(i);
    }
    return dias;
  }






}
