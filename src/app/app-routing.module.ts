import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './errors-page/components/page-not-found/page-not-found.component';
import { SubmitPostComponent } from './post/components/submit-post/submit-post.component';
import {ListPostComponent} from "./post/components/list-post/list-post.component";

const routes: Routes = [
  { path: '', component:  ListPostComponent},
  { path: 'auth', loadChildren:() => import("./Authentication/authentication.module").then(m => m.AuthenticationModule) },
  { path: 'submit', component: SubmitPostComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
