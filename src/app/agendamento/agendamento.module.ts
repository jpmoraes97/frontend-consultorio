import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {CalendarModule} from 'primeng/calendar';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { NovoAgendamentoComponent } from './novo-agendamento/novo-agendamento.component';
import { PesquisarAgendamentoComponent } from './pesquisar-agendamento/pesquisar-agendamento.component';


@NgModule({
  declarations: [
    NovoAgendamentoComponent,
    PesquisarAgendamentoComponent
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,

    DropdownModule,
    TooltipModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    FieldsetModule,
    FormsModule,
    CalendarModule
  ]
})
export class AgendamentoModule { }
