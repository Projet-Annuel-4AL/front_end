import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardConnectedComponent } from './dashboard-connected/dashboard-connected.component';
import { DashboardNotConnectedComponent } from './dashboard-not-connected/dashboard-not-connected.component';
import {SharedModule} from "../shared/shared.module";
import {AuthenticationModule} from "../Authentication/authentication.module";



@NgModule({
  declarations: [
    DashboardConnectedComponent,
    DashboardNotConnectedComponent
  ],
  exports: [
    DashboardConnectedComponent,
    DashboardNotConnectedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
