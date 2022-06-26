import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentComponent} from "./components/comment/comment.component";
import {SubmitPostComponent} from "./components/submit-post/submit-post.component";
import {PostComponent} from "./post.component";

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'submit', component: SubmitPostComponent },
  { path: 'comment', component: CommentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
