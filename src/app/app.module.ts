import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastyModule, ToastyService} from 'ng2-toasty';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar/navbar.component';
import { PacienteModule } from './paciente/paciente.module';
import { ProfissionalModule } from './profissional/profissional.module';
import { TituloModule } from './titulo/titulo.module';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ConfirmDialogModule,
    ToastyModule,

    PacienteModule,
    ProfissionalModule,
    TituloModule,
    AgendamentoModule,
    DashboardModule,
    RelatorioModule,
    SegurancaModule,

    CoreModule

  ],
 
  providers : [
    ToastyService,
    ConfirmationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


