import { Component, OnInit, ViewChild } from '@angular/core';
import { AgendamentoService } from '../agendamento.service';
import { ToastyService } from 'ng2-toasty';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';






@Component({
  selector: 'app-pesquisar-agendamento',
  templateUrl: './pesquisar-agendamento.component.html',
  styleUrls: ['./pesquisar-agendamento.component.css']
})
export class PesquisarAgendamentoComponent implements OnInit {

  agendamentos : any[];

  constructor(private agendamentoService : AgendamentoService,
              private toasty : ToastyService) { }

  ngOnInit() {

    this.listar();

 }
  

  listar(){
    this.agendamentoService.listar()
    .then(resposta => {
      this.agendamentos = resposta;
    })
  }

  deletar(agendamento : any){
    this.agendamentoService.deletar(agendamento.id)
    .then(() => {
      this.toasty.success('Agendamento deletado com sucesso');
      this.listar();
      
    })
  }


}
