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
import {GroupService} from "./groups/service/group.service";
import { DialogNotConnectedComponent } from './dialog-not-connected/dialog-not-connected.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardConnectedComponent,
    DashboardNotConnectedComponent,
    DialogTemplateComponent,
    DialogNotConnectedComponent
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
    MatDialogModule,
    NgChartsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, JwtTokenService,LocalStorageService, GroupService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
