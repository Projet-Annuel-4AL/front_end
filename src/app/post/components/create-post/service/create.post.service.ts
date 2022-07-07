import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {JwtTokenService} from "../../../../Authentication/services/jwt-token.service";


@Injectable()
export class LikePostService {

  constructor(
    private http: HttpClient,
    private _jwtTokenService: JwtTokenService) {
  }
}
