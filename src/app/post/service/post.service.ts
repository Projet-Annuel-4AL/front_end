import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../domain/post.entity";
import {Injectable} from "@angular/core";
import {CreateCode} from "../post-body/create-code.dto";
import {CreateText} from "../post-body/create-text.dto";
import {CreatePicture} from "../post-body/create-picture.dto";
import {CreateVideo} from "../post-body/create-video.dto";
import {Text} from "../post-body/domain/text.entity";
import {CreatePost} from "../domain/create-post.dto";
import {Code} from "../post-body/domain/code.entity";

@Injectable()
export class PostService {
  private _url: string = "http://localhost:3000/api/posts/";

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return new Observable<Post[]>((observer) => {
      this.http.get(this._url).subscribe((results: any) => {
        const posts = [];
        for (const result of results) {
          const post = new Post(result.id,result.title,result.idVideo,result.idPicture,result.text,result.code,result.user, result.remarks);
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

  getPostById(idPost: number) {
    return new Observable<Post>((observer) => {
      this.http.get(this._url + idPost).subscribe((result: any) => {
        const post = new Post(result.id,result.title,result.idVideo,result.idPicture,result.text,result.code,result.user, result.remarks);
        observer.next(post);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  addPost(postToAdd: CreatePost) {
    return new Observable<Post>((observer) => {
      this.http.post(this._url, postToAdd).subscribe((result: any) => {
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });

  }

  addCode(codeToAdd: CreateCode, title: string) {
    return new Observable<Code>((observer) => {
      this.http.post("http://localhost:3000/api/codes", codeToAdd).subscribe( (code: any) =>  {
        const createPost: CreatePost = new CreatePost(title, null, null, null, code.id, 2);
        this.addPost(createPost).subscribe();
        observer.complete();
      })
    });
  }

  addText(textToAdd: CreateText, title: string) {
    return new Observable<Text>((observer) => {
      this.http.post("http://localhost:3000/api/texts", textToAdd).subscribe( (text: any) =>  {
          const createPost: CreatePost = new CreatePost(title, null, null, text.id, null, 2);
          this.addPost(createPost).subscribe();
          observer.complete();
      })
    });
  }

  addPicture(pictureToAdd: CreatePicture) {

  }

  addVideo(videoToAdd: CreateVideo) {

  }
}
