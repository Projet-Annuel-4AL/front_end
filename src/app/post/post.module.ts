import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { PostComponent } from './post.component';
import {PostService} from "./service/post.service";
import {PostRoutingModule} from "./post-routing.module";
import {SubmitPostComponent} from "./components/submit-post/submit-post.component";
import {SubmitTextComponent} from "./components/submit-post/submit-text/submit-text.component";
import {SubmitImageVideoComponent} from "./components/submit-post/submit-image-video/submit-image-video.component";
import {NgxDropzoneModule} from "ngx-dropzone";
import {MonacoEditorModule} from "ngx-monaco-editor";
import {CodeRunnerComponent} from "./components/submit-post/code-runner/code-runner.component";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {CreatePostComponent} from "./components/create-post/create-post.component";
import { RemarksPostComponent } from './components/remarks-post/remarks-post.component';
import {RemarksPostService} from "./components/remarks-post/service/remarks.post.service";
import {UserService} from "../user/service/user.service";
import {LikeComponent} from "./components/like/like.component";
import {LikePostService} from "./components/like/service/like.post.service";
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    PostComponent,
    CreatePostComponent,
    SubmitPostComponent,
    SubmitTextComponent,
    SubmitImageVideoComponent,
    CodeRunnerComponent,
    RemarksPostComponent,
    LikeComponent,
    DeletePostComponent
  ],
  exports: [
    PostComponent,
    CreatePostComponent,
    LikeComponent,

  ],
  providers:[PostService, RemarksPostService, UserService, LikePostService],
    imports: [
        SharedModule,
        PostRoutingModule,
        NgxDropzoneModule,
        MonacoEditorModule.forRoot(),
        AngularEditorModule,
        MatDialogModule
    ]
})
export class PostModule { }
