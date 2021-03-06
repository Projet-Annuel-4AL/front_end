import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateUserDto} from "../../../user/domain/create-user.dto";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";
import {ApiUrlConstant} from "../../../apiUrlConstant";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  token!: string;

  constructor(private http: HttpClient,private _router: Router,  private localStorage: LocalStorageService, private router: Router) {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.required
      ]),
      mail: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }


  submitRegisterForm() {

    const user = new CreateUserDto(this.registerForm.value.firstName, this.registerForm.value.lastName, this.registerForm.value.mail, this.registerForm.value.password);
    return this.http.post(ApiUrlConstant.HOST+"auth/register", user).subscribe((result: any) => {
      this.loginAfterCreate(user.mail,user.password);
      this.registerForm.reset();
    });
  }
  loginAfterCreate(mail: string, password: string) {
    const body = {mail: mail, password: password}
    this.http
      .post(ApiUrlConstant.HOST+"auth/login", body).toPromise()
      .then(response => {

        const tmp = JSON.stringify(response).split("\"");
        this.token = tmp[3];

        this.localStorage.set("JwtAccessToken", this.token);
        this.router.navigateByUrl('').then(() => {
          window.location.reload()
        });
      })
      .catch(err => {
        return false
      });
  }
}
