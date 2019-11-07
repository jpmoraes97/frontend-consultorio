import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {InputMaskModule} from 'primeng/inputmask';
import { PanelModule } from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';

import { ProfissionalRoutingModule } from './profissional-routing.module';
import { PesquisarProfissionalComponent } from './pesquisar-profissional/pesquisar-profissional.component';
import { NovoProfissionalComponent } from './novo-profissional/novo-profissional.component';
import { ProfissionalService } from './profissional.service';

@NgModule({
  declarations: [
    PesquisarProfissionalComponent,
    NovoProfissionalComponent
  ],
  imports: [
    CommonModule,
    ProfissionalRoutingModule,

    DropdownModule,
    TooltipModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    FieldsetModule,
    FormsModule,
    InputMaskModule,
    PanelModule,
    DialogModule
    
  ],
  providers : [
    ProfissionalService
  ]
})
export class ProfissionalModule { }
