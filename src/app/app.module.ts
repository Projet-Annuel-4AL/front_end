import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { MonacoEditorModule} from "ngx-monaco-editor";
import { AppRoutingModule } from './app-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AppComponent } from './app.component';
import { PostModule } from "./post/post.module";
import { CreatePostComponent} from "./post/components/create-post/create-post.component";
import { ListPostComponent } from "./post/components/list-post/list-post.component";
import { CodeRunnerComponent } from './post/components/submit-post/code-runner/code-runner.component';
import { PageNotFoundComponent } from './errors-page/components/page-not-found/page-not-found.component';
import { SubmitPostComponent } from './post/components/submit-post/submit-post.component';
import { SubmitTextComponent } from './post/components/submit-post/submit-text/submit-text.component';
import { SubmitImageVideoComponent } from './post/components/submit-post/submit-image-video/submit-image-video.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    AppComponent,
    CodeRunnerComponent,
    PageNotFoundComponent,
    SubmitPostComponent,
    SubmitTextComponent,
    SubmitImageVideoComponent,
    CreatePostComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularEditorModule,
    MonacoEditorModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    NgxDropzoneModule,
    PostModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
