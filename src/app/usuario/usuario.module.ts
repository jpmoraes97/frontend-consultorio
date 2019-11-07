import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { UsuarioService } from './usuario.service';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';




@NgModule({
  declarations: [NovoUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    PanelModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ],

  providers:[
    UsuarioService
  ]
})
export class UsuarioModule { }
