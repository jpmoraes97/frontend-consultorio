import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

import { CoreRoutingModule } from './core-routing.module';
import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';
import { TituloService } from '../titulo/titulo.service';
import { PacienteService } from '../paciente/paciente.service';
import { CategoriaService } from '../categoria/categoria.service';
import { SegurancaService } from '../seguranca/seguranca.service';
import { RelatorioService } from '../relatorio/relatorio.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { ProfissionalService } from '../profissional/profissional.service';
import { ErrorHandlerService } from './error-handler.service';
import { AngularHttpInterceptor } from '../seguranca/seguranca/angular-http';
import { AuthGuard } from '../seguranca/auth.guard';


export function tokenGetter() {
  return localStorage.getItem('token');
}

registerLocaleData(localePt);

@NgModule({
  declarations: [
    NaoAutorizadoComponent,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['http://localhost:8080/oauth/token']
      }
    }),

  ],
  providers : [
    TituloService,
    PacienteService,
    CategoriaService,
    SegurancaService,
    RelatorioService,
    DashboardService,
    ProfissionalService,
    ErrorHandlerService,
    {provide : LOCALE_ID, useValue: 'pt-BR'},
    JwtHelperService,{
      provide: HTTP_INTERCEPTORS,
      useClass: AngularHttpInterceptor,
      multi: true
  },

  AuthGuard
  ]
})
export class CoreModule { }
