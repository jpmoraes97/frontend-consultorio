import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { SegurancaComponent } from './seguranca/seguranca.component';
import { SegurancaService } from './seguranca.service';

@NgModule({
  declarations: [
    SegurancaComponent
  ],
  imports: [
    CommonModule,
    SegurancaRoutingModule,

    ButtonModule,
    FieldsetModule,
    InputTextModule,
    FormsModule,
    PanelModule
  ],
  providers : [
    SegurancaService
  ]
})
export class SegurancaModule { }
