import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisarPacienteComponent } from './paciente/pesquisar-paciente/pesquisar-paciente.component';
import { PacienteService } from './paciente/paciente.service';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { NovoPacienteComponent } from './paciente/novo-paciente/novo-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FieldsetModule} from 'primeng/fieldset';

import {ToastyModule, ToastyService} from 'ng2-toasty';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PesquisarProfissionalComponent } from './profissional/pesquisar-profissional/pesquisar-profissional.component';
import { NovoProfissionalComponent } from './profissional/novo-profissional/novo-profissional.component';
import { ProfissionalService } from './profissional/profissional.service';
import { NovoAgendamentoComponent } from './agendamento/novo-agendamento/novo-agendamento.component';
import { PesquisarAgendamentoComponent } from './agendamento/pesquisar-agendamento/pesquisar-agendamento.component';
import { AgendamentoService } from './agendamento/agendamento.service';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

import {ChartModule} from 'primeng/chart';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import {TooltipModule} from 'primeng/tooltip';
import { NovoTituloComponent } from './titulo/novo-titulo/novo-titulo.component';
import { PesquisarTituloComponent } from './titulo/pesquisar-titulo/pesquisar-titulo.component';
import { TituloService } from './titulo/titulo.service';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PanelModule} from 'primeng/panel';
import { NovaCategoriaComponent } from './categoria/nova-categoria/nova-categoria.component';
import { PesquisarCategoriaComponent } from './categoria/pesquisar-categoria/pesquisar-categoria.component';
import { CategoriaService } from './categoria/categoria.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ErrorHandlerService } from './core/error-handler.service';
import { RelatoriosComponent } from './relatorio/relatorios/relatorios.component';
import {FormsModule} from '@angular/forms';
import { RelatorioService } from './relatorio/relatorio.service';



registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    PesquisarPacienteComponent,
    NovoPacienteComponent,
    NavbarComponent,
    PesquisarProfissionalComponent,
    NovoProfissionalComponent,
    NovoAgendamentoComponent,
    PesquisarAgendamentoComponent,
    NovoTituloComponent,
    PesquisarTituloComponent,
    NovaCategoriaComponent,
    PesquisarCategoriaComponent,
    DashboardComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ReactiveFormsModule,
    FieldsetModule,
    ToastyModule,
    DropdownModule,
    CalendarModule,
    FullCalendarModule,
    TooltipModule,
    SelectButtonModule,
    PanelModule,
    ChartModule,
    ConfirmDialogModule,
    FormsModule

  ],
  providers: [
    PacienteService, 
    ProfissionalService, 
    AgendamentoService, 
    TituloService, 
    CategoriaService,
    DashboardService,
    ConfirmationService,
    ToastyService,
    ErrorHandlerService,
    {provide : LOCALE_ID, useValue: 'pt-BR'},
    RelatorioService
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
