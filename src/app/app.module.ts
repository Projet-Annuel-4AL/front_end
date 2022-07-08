import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AppComponent } from './app.component';
import { PostModule } from "./post/post.module";
import { PageNotFoundComponent } from './errors-page/components/page-not-found/page-not-found.component';
import {TokenInterceptor} from "./token-interceptor";
import {JwtTokenService} from "./Authentication/services/jwt-token.service";
import {LocalStorageService} from "./Authentication/services/local-storage.service";
import {AuthenticationModule} from "./Authentication/authentication.module";
import {DashboardConnectedComponent} from "./dashboard/dashboard-connected/dashboard-connected.component";
import {DashboardNotConnectedComponent} from "./dashboard/dashboard-not-connected/dashboard-not-connected.component";
import {MatDialogModule} from '@angular/material/dialog';
import {DialogTemplateComponent} from "./dialog/components/dialog-template/dialog-template.component";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardConnectedComponent,
    DashboardNotConnectedComponent,
    DialogTemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    PostModule,
    AuthenticationModule,
    MatDialogModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, JwtTokenService,LocalStorageService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
