import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GroupsComponent} from "./groups.component";
import {GroupComponent} from "./components/group/group.component";
import {CreateGroupComponent} from "./components/create-group/create-group.component";
import {CollaborationComponent} from "./components/collaboration/collaboration.component";

const routes: Routes = [
  { path: '',  component: GroupsComponent},
  { path: 'createGroup',  component: CreateGroupComponent},
  { path: 'collab/:idGroup',  component: CollaborationComponent},
  { path: 'id/:idGroup',  component: GroupComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
