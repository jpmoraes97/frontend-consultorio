import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarPacienteComponent } from './paciente/pesquisar-paciente/pesquisar-paciente.component';
import { NovoPacienteComponent } from './paciente/novo-paciente/novo-paciente.component';
import { NovoProfissionalComponent } from './profissional/novo-profissional/novo-profissional.component';
import { PesquisarProfissionalComponent } from './profissional/pesquisar-profissional/pesquisar-profissional.component';
import { NovoAgendamentoComponent } from './agendamento/novo-agendamento/novo-agendamento.component';
import { PesquisarAgendamentoComponent } from './agendamento/pesquisar-agendamento/pesquisar-agendamento.component';
import { NovoTituloComponent } from './titulo/novo-titulo/novo-titulo.component';
import { PesquisarTituloComponent } from './titulo/pesquisar-titulo/pesquisar-titulo.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path : '', redirectTo : 'dashboard', pathMatch : 'full'},
  {path : 'pacientes', component : PesquisarPacienteComponent},
  {path : 'pacientes/cadastrar', component : NovoPacienteComponent},
  {path : 'profissionais', component : PesquisarProfissionalComponent},
  {path : 'profissionais/cadastrar', component : NovoProfissionalComponent},
  {path : 'agendamentos', component : PesquisarAgendamentoComponent},
  {path : 'agendamentos/cadastrar', component : NovoAgendamentoComponent},
  {path : 'agendamentos/:id', component : NovoAgendamentoComponent},
  {path : 'titulos', component : PesquisarTituloComponent},
  {path : 'titulos/cadastrar', component : NovoTituloComponent},
  {path : 'titulos/:id', component : NovoTituloComponent},
  {path : 'dashboard', component : DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
