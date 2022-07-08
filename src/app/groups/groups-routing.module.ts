import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GroupsComponent} from "./groups.component";
import {GroupComponent} from "./components/group/group.component";

const routes: Routes = [
  { path: '',  component: GroupsComponent},
  { path: ':idGroup',  component: GroupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
