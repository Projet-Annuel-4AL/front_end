import { Component} from '@angular/core';
import {JwtTokenService} from "../../../Authentication/services/jwt-token.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent{
  isConnected: boolean | undefined;

  constructor(private _jwtTokenService: JwtTokenService) {
  }

  ngOnInit(): void {


    this.isConnected = this._jwtTokenService.getIdUser() != null;
  }

}
