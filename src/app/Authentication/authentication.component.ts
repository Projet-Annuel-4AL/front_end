import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./services/local-storage.service";
import {JwtTokenService} from "./services/jwt-token.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  @Output() isLogged = new EventEmitter<boolean>()
  private localStorage: LocalStorageService;
  private jwtTokenService: JwtTokenService;

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

      this.setIsLogged(true)

    } else {
      this.setIsLogged(false)
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

  public setIsLogged(value : boolean): void {
    this.isLogged.emit(value);
  }

}
