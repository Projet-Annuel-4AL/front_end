import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";
import {ApiUrlConstant} from "../../../apiUrlConstant";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  accessToken!: string;
  refreshToken!: string;
  loginForm = new FormGroup({
    mail: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private router: Router) {
  }

  submitLoginForm() {
    const body = {mail: this.loginForm.value.mail, password: this.loginForm.value.password }
    this.http
      .post(ApiUrlConstant.HOST+"auth/login", body,{responseType: 'text'}).toPromise()
      .then(response => {

        this.accessToken = response.split(',')[0].split(':')[1].split('"')[1]
        console.log('acces -> \n' + this.accessToken)
        this.refreshToken = response.split(',')[1].split(':')[1].split('"')[1]
        console.log('refresh -> \n' + this.refreshToken)

        this.localStorage.set("JwtAccessToken", this.accessToken);
        this.localStorage.set("JwtRefreshToken", this.accessToken);
        this.router.navigateByUrl('').then(() => {
          window.location.reload()
        });
      })
      .catch(err => {
        return false
      });
  }
}
