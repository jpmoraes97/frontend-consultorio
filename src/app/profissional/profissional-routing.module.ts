import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarProfissionalComponent } from './pesquisar-profissional/pesquisar-profissional.component';
import { NovoProfissionalComponent } from './novo-profissional/novo-profissional.component';

const routes: Routes = [
  {path : 'profissionais' , component : PesquisarProfissionalComponent},
  {path : 'profissionais/cadastrar', component : NovoProfissionalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionalRoutingModule { }
