import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Code} from "../post-body/domain/code.entity";

@Injectable()
export class CodeService {
  private _url: string = "http://localhost:3000/api/codes/";

  constructor(private http: HttpClient) {
  }

  getCodes() {
    return new Observable<Code[]>((observer) => {
      this.http.get(this._url).subscribe((results: any) => {
        const codes = [];
        for (const result of results) {
          const code = new Code(
            result.id,
            result.language,
            result.content);
          codes.push(code);
        }
        observer.next(codes);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  getNumberOfPostByLanguage(){

    let result: number[]= [];
    let codes = this.getCodes();
    codes.forEach(function (code){
      let java=0;
      let c = 0;
      let python = 0;
      code.forEach(function (x){
        if(x.language == 0){
          java+=1;
        }
        if(x.language == 1){
          python+=1;
        }
        if(x.language == 2){
          c+=1;
        }
      })
      result.push(python);
      result.push(c);
      result.push(java);
    })
    return result;
  }

}
