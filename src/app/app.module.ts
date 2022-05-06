import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CodeRunnerComponent } from './submit-post/code-runner/code-runner.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MonacoEditorModule} from "ngx-monaco-editor";
import { LoginComponent } from './Authentication/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { PostsComponent } from './home/posts/posts.component';
import { CreatePostComponent } from './home/create-post/create-post.component';
import { SubmitPostComponent } from './submit-post/submit-post.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from "@angular/material/tabs";
import { SubmitTextComponent } from './submit-post/submit-text/submit-text.component';
import { SubmitImageVideoComponent } from './submit-post/submit-image-video/submit-image-video.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { SubmitImageVideoDirective } from './submit-image-video.directive';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    CodeRunnerComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    RegisterComponent,
    PostsComponent,
    CreatePostComponent,
    SubmitPostComponent,
    SubmitTextComponent,
    SubmitImageVideoComponent,
    SubmitImageVideoDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularEditorModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    DragDropModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
