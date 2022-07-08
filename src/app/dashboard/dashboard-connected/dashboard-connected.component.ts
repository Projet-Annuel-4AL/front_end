import { Component, OnInit } from '@angular/core';
import {JwtTokenService} from "../../Authentication/services/jwt-token.service";
import {LocalStorageService} from "../../Authentication/services/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-connected',
  templateUrl: './dashboard-connected.component.html',
  styleUrls: ['./dashboard-connected.component.scss']
})
export class DashboardConnectedComponent implements OnInit {
  idUser! : number

  constructor(private _jwtTokenService: JwtTokenService, private _localStorageService: LocalStorageService, private _router: Router) {
    this.idUser = Number(_jwtTokenService.getIdUser())
  }

  ngOnInit(): void {
  }

  deconnection(): void {
    this._jwtTokenService.getDecodeToken()
    this._localStorageService.remove("JWTToken");
    this._router.navigateByUrl("")
      .then(() => {
        window.location.reload();
      });
  }

}
