import { Component, OnInit } from '@angular/core';
import {JwtTokenService} from "../Authentication/services/jwt-token.service";
import {LocalStorageService} from "../Authentication/services/local-storage.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLogged! : boolean;
  private localStorage: LocalStorageService
  private jwtTokenService: JwtTokenService

  constructor(localStorage: LocalStorageService, jwtTokenService: JwtTokenService, private http: HttpClient) {
    this.localStorage = localStorage
    this.jwtTokenService = jwtTokenService
  }

  ngOnInit(): void {
    this.isConnected()
  }

  isConnected() : void {
    let jwtTokenKey: string = "JWTToken";

    let jwtTokenValue: string | null =  this.localStorage.get(jwtTokenKey)

    if(jwtTokenValue) {
      this.jwtTokenService.setToken(jwtTokenValue)

      this.getUser(this.jwtTokenService.getEmailId())

      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getUser(mail: string | null){
    let path  = "http://localhost:3000/api/users/" + mail;
    this.http
      .get<any>(path).toPromise()
      .then(response => {
        console.log(response)
      })
      .catch( err => {
        console.log(err)
      })
  }

}
