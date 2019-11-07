import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea'; 
import {FieldsetModule} from 'primeng/fieldset';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CalendarModule} from 'primeng/calendar';

import { TituloRoutingModule } from './titulo-routing.module';
import { PesquisarTituloComponent } from './pesquisar-titulo/pesquisar-titulo.component';
import { NovoTituloComponent } from './novo-titulo/novo-titulo.component';
import { TituloService } from './titulo.service';

@NgModule({
  declarations: [
    PesquisarTituloComponent,
    NovoTituloComponent
  ],
  imports: [
    CommonModule,
    TituloRoutingModule,

    DropdownModule,
    TooltipModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    FieldsetModule,
    FormsModule,
    SelectButtonModule,
    CalendarModule,
    InputTextModule
  ],

  providers : [
    TituloService
  ]
})
export class TituloModule { }
