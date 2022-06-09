import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {SharedModule} from "../shared/shared.module";
import {JwtTokenService} from "./services/jwt-token.service";
import {LocalStorageService} from "./services/local-storage.service";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthenticationModule { }
