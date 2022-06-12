import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { PostComponent } from './post.component';
import {PostService} from "./service/post.service";


@NgModule({
  declarations: [
    PostComponent,
  ],
  providers:[PostService],
    imports: [
        SharedModule
    ]
})
export class PostModule { }
