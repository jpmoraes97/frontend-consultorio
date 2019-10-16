import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {CalendarModule} from 'primeng/calendar';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { RelatorioService } from './relatorio.service';

@NgModule({
  declarations: [
    RelatoriosComponent
  ],
  imports: [
    CommonModule,
    RelatorioRoutingModule,

    CalendarModule,
    FormsModule
  ],
  providers : [
    RelatorioService
  ]
})
export class RelatorioModule { }
