import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PesquisarPacienteComponent } from './pesquisar-paciente/pesquisar-paciente.component';
import { NovoPacienteComponent } from './novo-paciente/novo-paciente.component';
import { PacienteService } from './paciente.service';


@NgModule({
  declarations: [
    PesquisarPacienteComponent,
    NovoPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,

    DropdownModule,
    TooltipModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    FieldsetModule,
    FormsModule,
    PanelModule,
    DialogModule

  ],
  providers : [
    PacienteService
  ],
  exports : [
   
  ]
})
export class PacienteModule { }
