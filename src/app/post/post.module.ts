import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { PostComponent } from './post.component';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PostModule { }
