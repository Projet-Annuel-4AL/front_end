import { Component, OnInit } from '@angular/core';
import {JwtTokenService} from "../../Authentication/services/jwt-token.service";

@Component({
  selector: 'app-dashboard-connected',
  templateUrl: './dashboard-connected.component.html',
  styleUrls: ['./dashboard-connected.component.scss']
})
export class DashboardConnectedComponent implements OnInit {
  idUser! : number

  constructor(private _jwtTokenService: JwtTokenService) {
    this.idUser = Number(_jwtTokenService.getIdUser())
  }

  ngOnInit(): void {
  }

}
