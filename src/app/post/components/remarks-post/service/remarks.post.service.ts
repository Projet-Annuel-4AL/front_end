import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Remarks} from "../domain/Remarks";

@Injectable()
export class RemarksPostService {
  private _url: string = "http://localhost:3000/api/remarks/";

  constructor(private http: HttpClient) {
  }

  getRemarksByIdPost(idPost: number) {
    return new Observable<Remarks[]>((observer) => {
      this.http.get(this._url + idPost).subscribe((results: any) => {
        const remarks = [];
        for (const result of results) {
          console.log(results)
          const remark = new Remarks(result.id, result.idParentRemark, result.idPost, result.content);
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
