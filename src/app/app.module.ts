import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { MonacoEditorModule} from "ngx-monaco-editor";
import { AppRoutingModule } from './app-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { DragDropModule} from "@angular/cdk/drag-drop";
import { AppComponent } from './app.component';
import { CodeRunnerComponent } from './post/components/submit-post/code-runner/code-runner.component';
import { LoginComponent } from './Authentication/components/login/login.component';
import { PageNotFoundComponent } from './errors-page/components/page-not-found/page-not-found.component';
import { RegisterComponent } from './Authentication/components/register/register.component';
import { ListPostComponent } from './post/components/list-post/list-post.component';
import { CreatePostComponent } from './post/components/create-post/create-post.component';
import { SubmitPostComponent } from './post/components/submit-post/submit-post.component';
import { SubmitTextComponent } from './post/components/submit-post/submit-text/submit-text.component';
import { SubmitImageVideoComponent } from './post/components/submit-post/submit-image-video/submit-image-video.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    CodeRunnerComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ListPostComponent,
    CreatePostComponent,
    SubmitPostComponent,
    SubmitTextComponent,
    SubmitImageVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularEditorModule,
    MonacoEditorModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    SharedModule,
    CoreModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
