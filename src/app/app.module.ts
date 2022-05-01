import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CodeRunnerComponent } from './code-runner/code-runner.component';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MonacoEditorModule} from "ngx-monaco-editor";
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CodeRunnerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MonacoEditorModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
