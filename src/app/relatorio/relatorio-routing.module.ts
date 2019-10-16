import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatoriosComponent } from './relatorios/relatorios.component';

const routes: Routes = [
  {path : 'relatorios', component : RelatoriosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
