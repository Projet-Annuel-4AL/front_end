import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/components/login/login.component';
import { RegisterComponent } from './Authentication/components/register/register.component';
import { PageNotFoundComponent } from './errors-page/components/page-not-found/page-not-found.component';
import { SubmitPostComponent } from './post/components/submit-post/submit-post.component';
import { CreatePostComponent } from './post/components/create-post/create-post.component';

const routes: Routes = [
  { path: '', component:  CreatePostComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'submit', component: SubmitPostComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
