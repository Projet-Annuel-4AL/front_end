import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../domain/Post";

@Injectable()
export class CommentService {
  private _urlPost: string = "http://localhost:3000/api/posts/";

  constructor(private http: HttpClient) {
  }

  getPostById(idPost : number) {
    return new Observable<Post>((observer) => {
      this.http.get(this._urlPost + idPost).subscribe((result: any) => {
          const post = new Post();
          post.loadFromJson(result);
          observer.next(post);
          observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
