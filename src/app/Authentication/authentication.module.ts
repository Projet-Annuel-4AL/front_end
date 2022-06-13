import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {SharedModule} from "../shared/shared.module";
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent
  ],
  exports: [
    AuthenticationComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthenticationModule { }
