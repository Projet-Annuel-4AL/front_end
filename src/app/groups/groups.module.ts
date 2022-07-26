import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { GroupComponent } from './components/group/group.component';
import {SharedModule} from "../shared/shared.module";
import { CreateGroupComponent } from './components/create-group/create-group.component';
import {MonacoEditorModule} from "ngx-monaco-editor";
import {PostModule} from "../post/post.module";



@NgModule({
  declarations: [
    GroupsComponent,
    GroupComponent,
    CreateGroupComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule,
    MonacoEditorModule,
    PostModule
  ]
})
export class GroupsModule { }
