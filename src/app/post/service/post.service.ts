import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./Post";
import {Injectable} from "@angular/core";

@Injectable()
export class PostService {
  private _url: string = "http://localhost:3000/api/posts";

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return new Observable<Post[]>((observer) => {
      this.http.get(this._url).subscribe((result: any) => {
        const posts = [];
        for (const jsonPosts of result) {
          const post = new Post();
          post.loadFromJson(jsonPosts);
          posts.push(post);
        }
        observer.next(posts);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
