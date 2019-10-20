import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisarPacienteComponent } from './pesquisar-paciente/pesquisar-paciente.component';
import { NovoPacienteComponent } from './novo-paciente/novo-paciente.component';
import { AuthGuard } from '../seguranca/auth.guard';

const routes: Routes = [
  {
    path : 'pacientes', component : PesquisarPacienteComponent,
    canActivate : [AuthGuard],
    data : {roles : ['ROLE_PESQUISAR_PACIENTE']}
  },
  {
    path : 'pacientes/:id', component : NovoPacienteComponent,
    canActivate : [AuthGuard],
    data : {roles : ['ROLE_CADASTRAR_PACIENTE']}
  },
  {
    path : 'pacientes/cadastrar', component : NovoPacienteComponent,
    canActivate : [AuthGuard],
    data : {roles : ['ROLE_CADASTRAR_PACIENTE']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
