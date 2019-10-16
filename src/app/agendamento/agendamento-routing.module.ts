import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarAgendamentoComponent } from './pesquisar-agendamento/pesquisar-agendamento.component';
import { NovoAgendamentoComponent } from './novo-agendamento/novo-agendamento.component';

const routes: Routes = [
  {path : 'agendamentos', component : PesquisarAgendamentoComponent},
  {path : 'agendamentos/cadastrar', component : NovoAgendamentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoRoutingModule { }
