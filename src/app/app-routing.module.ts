import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './errors-page/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren:() => import("./post/post.module").then(m => m.PostModule) },
  { path: 'auth', loadChildren:() => import("./Authentication/authentication.module").then(m => m.AuthenticationModule) },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
