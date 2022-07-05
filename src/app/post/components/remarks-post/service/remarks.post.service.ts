import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Remark} from "../domain/remark.entity";
import {Like} from "../../like/domain/like.entity";
import {JwtTokenService} from "../../../../Authentication/services/jwt-token.service";
import {User} from "../../../../user/domain/user.entity";
import {Post} from "../../../domain/post.entity";

@Injectable()
export class RemarksPostService {
  private _url: string = "http://localhost:3000/api/remarks/";

  constructor(private http: HttpClient, private _jwtTokenService: JwtTokenService) {
  }

  getRemarksByIdPost(idPost: number) {
    return new Observable<Remark[]>((observer) => {
      this.http.get(this._url + idPost).subscribe((results: any) => {
        const remarks = [];
        for (const result of results) {
          const remark = new Remark(result.id, result.idParentRemark, result.post, result.content);
          remarks.push(remark);
        }
        observer.next(remarks);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
