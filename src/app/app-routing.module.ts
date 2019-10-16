import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NovoAgendamentoComponent } from './agendamento/novo-agendamento/novo-agendamento.component';
import { PesquisarAgendamentoComponent } from './agendamento/pesquisar-agendamento/pesquisar-agendamento.component';
import { NovoTituloComponent } from './titulo/novo-titulo/novo-titulo.component';
import { RelatoriosComponent } from './relatorio/relatorios/relatorios.component';
import { SegurancaComponent } from './seguranca/seguranca/seguranca.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado/nao-autorizado.component';

const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  
 /* {path : 'pacientes', component : PesquisarPacienteComponent, 
  canActivate : [AuthGuard],
  data : {roles : ['ROLE_PESQUISAR_PACIENTE']}
  },
  */
  
  //{path : 'pacientes/cadastrar', component : NovoPacienteComponent, 
 // canActivate : [AuthGuard],
  //data : {roles : ['ROLE_CADASTRAR_PACIENTE']}
 // },
  
  
  
  
  {path : 'agendamentos', component : PesquisarAgendamentoComponent},
  {path : 'agendamentos/cadastrar', component : NovoAgendamentoComponent},
  {path : 'agendamentos/:id', component : NovoAgendamentoComponent},
 
  {path : 'titulos/:id', component : NovoTituloComponent},

  {path : 'relatorios', component : RelatoriosComponent},
  {path : 'login', component : SegurancaComponent},

  {path : 'nao-autorizado', component : NaoAutorizadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
