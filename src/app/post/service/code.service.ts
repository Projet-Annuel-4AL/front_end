import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Code} from "../post-body/domain/code.entity";
import {ApiUrlConstant} from "../../apiUrlConstant";
import {UpdateCollabCodeDto} from "../post-body/update-collab-code.dto";

@Injectable()
export class CodeService {
  private _url: string = ApiUrlConstant.HOST+"codes/";

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

  getCodeById(codeId: number) {
    return new Observable<Code>((observer) => {
      this.http.get(this._url+codeId).subscribe((result: any) => {
          const code = new Code(
            result.id,
            result.language,
            result.content
          );
        observer.next(code);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  testMercureCollab() {
    this.http.get(this._url+"collab").subscribe();
  }

  updateCodeById(codeId: number, updateCodeCollabDto: UpdateCollabCodeDto) {
    return new Observable<Code>((observer) => {
      this.http.patch(this._url+"collab/"+codeId, updateCodeCollabDto).subscribe((result: any) => {
        const code = new Code(
          result.id,
          result.language,
          result.content
        );
        observer.next(code);
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
