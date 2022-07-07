import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import {SharedModule} from "../shared/shared.module";
import {MonacoEditorModule} from "ngx-monaco-editor";
import {PostModule} from "../post/post.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FollowService} from "./components/profile/service/follow.service";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  providers:[FollowService],
  imports: [
    SharedModule,
    UserRoutingModule,
    MonacoEditorModule,
    PostModule,
    MatButtonToggleModule
  ]
})
export class UserModule { }
