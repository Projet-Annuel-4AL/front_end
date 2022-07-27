import { Component, OnInit } from '@angular/core';
import {JwtTokenService} from "../../Authentication/services/jwt-token.service";
import {LocalStorageService} from "../../Authentication/services/local-storage.service";
import {Router} from "@angular/router";
import {User} from "../../user/domain/user.entity";
import {UserService} from "../../user/service/user.service";

@Component({
  selector: 'app-dashboard-connected',
  templateUrl: './dashboard-connected.component.html',
  styleUrls: ['./dashboard-connected.component.scss']
})
export class DashboardConnectedComponent implements OnInit {
  user!: User

  constructor(
    private _jwtTokenService: JwtTokenService,
    private _localStorageService: LocalStorageService,
    private _router: Router,
    private _userService: UserService) {

  }

  ngOnInit(): void {
    const userId = Number(this._jwtTokenService.getIdUser())
    this._userService.getUserByID(userId).subscribe( user => {
      this.user = user
    })
  }

  deconnection(): void {
    this._jwtTokenService.getDecodeToken()
    this._localStorageService.remove("JwtAccessToken");
    this._router.navigateByUrl("")
      .then(() => {
        window.location.reload();
      });
  }

}
