import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ChartModule} from 'primeng/chart';
import {PanelModule} from 'primeng/panel';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    ChartModule,
    PanelModule
  ],
  providers : [
    DashboardService
  ]
})
export class DashboardModule { }
