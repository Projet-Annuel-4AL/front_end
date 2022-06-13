import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubmitPostComponent} from "./components/submit-post/submit-post.component";

const routes: Routes = [{ path: 'submit', component: SubmitPostComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
