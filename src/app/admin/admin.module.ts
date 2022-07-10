import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import {MatTableModule} from "@angular/material/table";
import { AdminPostsComponent } from './components/admin-posts/admin-posts.component';
import { AdminGroupsComponent } from './components/admin-groups/admin-groups.component';
import { AdminOverviewComponent } from './components/admin-overview/admin-overview.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {NgChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AdminComponent,
    AdminUserComponent,
    AdminPostsComponent,
    AdminGroupsComponent,
    AdminOverviewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatGridListModule,
    NgChartsModule
  ]
})
export class AdminModule { }
