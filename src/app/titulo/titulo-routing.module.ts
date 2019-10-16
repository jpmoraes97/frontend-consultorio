import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarTituloComponent } from './pesquisar-titulo/pesquisar-titulo.component';
import { NovoTituloComponent } from './novo-titulo/novo-titulo.component';

const routes: Routes = [
  {path : 'titulos', component : PesquisarTituloComponent},
  {path : 'titulos/cadastra', component : NovoTituloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TituloRoutingModule { }
