import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  token!: string;
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
    const body = {username: this.loginForm.value.mail, password: this.loginForm.value.password }
    this.http
      .post("http://localhost:3000/api/auth/login", body).toPromise()
      .then(response => {

        const tmp = JSON.stringify(response).split("\"");
        this.token = tmp[3];

        this.localStorage.set("JWTToken", this.token);
        this.router.navigateByUrl('');
      })
      .catch(err => {
        return false
      });
  }
}
