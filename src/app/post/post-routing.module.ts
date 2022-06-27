import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubmitPostComponent} from "./components/submit-post/submit-post.component";
import {PostComponent} from "./post.component";
import {RemarksPostComponent} from "./components/remarks-post/remarks-post.component";

const routes: Routes = [
  { path: '', component: PostComponent},
  { path: 'submit', component: SubmitPostComponent },
  { path: 'remark', component: RemarksPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
