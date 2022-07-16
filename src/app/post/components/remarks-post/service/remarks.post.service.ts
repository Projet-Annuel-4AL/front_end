import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Remark} from "../domain/remark.entity";
import {JwtTokenService} from "../../../../Authentication/services/jwt-token.service";
import {Post} from "../../../domain/post.entity";
import {ApiUrlConstant} from "../../../../apiUrlConstant";

@Injectable()
export class RemarksPostService {
  private _url: string = ApiUrlConstant.HOST+"remarks/";

  constructor(private http: HttpClient, private _jwtTokenService: JwtTokenService) {
  }

  getRemarksByIdPost(idPost: number) {
    return new Observable<Remark[]>((observer) => {
      this.http.get(this._url + idPost).subscribe((results: any) => {
        const remarks = [];
        for (const result of results) {
          const remark = new Remark(result.id, result.idParentRemark, result.post, result.content, 0);
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



  deleteRemarkById(idRemark: number){
    this.http.delete(this._url + idRemark)
      .subscribe({
        next: data => {
          console.log('Delete successful');
        },
        error: error => {
          console.error('There was an error!');
        }
      });
  }
}
