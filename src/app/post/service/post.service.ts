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
import {Router} from "@angular/router";
import {JwtTokenService} from "../../Authentication/services/jwt-token.service";
import {ApiUrlConstant} from "../../apiUrlConstant";
import {GroupService} from "../../groups/service/group.service";

@Injectable()
export class PostService {
  private _url: string = ApiUrlConstant.HOST+"posts/";

  constructor(private http: HttpClient,
              private _router: Router,
              private _jwtTokenService: JwtTokenService,
              private _groupService: GroupService) {
  }

  getPosts() {
    return new Observable<Post[]>((observer) => {
      this.http.get(this._url).subscribe((results: any) => {
        const posts = [];
        for (const result of results) {
          const post = new Post(
            result.id,
            result.title,
            result.createdDate.split('T')[0],
            result.idVideo,
            result.idPicture,
            result.text,
            result.code,
            result.user,
            result.remarks,
            result.likes);
          post.numberOfRemarks = result.remarks.length;
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

  getPostsByUserId(idUserToGet: number) {
    let idUser = idUserToGet
    return new Observable<Post[]>((observer) => {
      this.http.get(this._url + "id/" + idUser).subscribe((results: any) => {
        const posts = [];
        for (const result of results) {
          const post = new Post(
            result.id,
            result.title,
            result.createdDate.split('T')[0],
            result.idVideo,
            result.idPicture,
            result.text,
            result.code,
            result.user,
            result.remarks,
            result.likes);
          post.numberOfRemarks = result.remarks.length;
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
        const post = new Post(
          result.id,
          result.title,
          result.createdDate.split('T')[0],
          result.idVideo,
          result.idPicture,
          result.text,
          result.code,
          result.user,
          result.remarks,
          result.likes);
        observer.next(post);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  addPost(postToAdd: CreatePost, idGroup: number) {
    return new Observable<Post>((observer) => {
      this.http.post(this._url, postToAdd).subscribe((result: any) => {
        if (idGroup != null) {
          this._groupService.addRelationBetweenGroupAndPost(idGroup, result.id);
        }
        this._router.navigateByUrl("")
          .then(() => {
            window.location.reload();
          });
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });

  }

  addCode(codeToAdd: CreateCode, title: string, idGroup: number) {
    return new Observable<Code>((observer) => {
      this.http.post(ApiUrlConstant.HOST+"codes", codeToAdd).subscribe( (code: any) =>  {
        const createPost: CreatePost = new CreatePost(title, null, null, null, code.id, Number(this._jwtTokenService.getIdUser()));
        this.addPost(createPost, idGroup).subscribe();
        observer.complete();
      })
    });
  }

  addText(textToAdd: CreateText, title: string, idGroup: number) {
    return new Observable<Text>((observer) => {
      this.http.post(ApiUrlConstant.HOST+"texts", textToAdd).subscribe( (text: any) =>  {
          const createPost: CreatePost = new CreatePost(title, null, null, text.id, null, Number(this._jwtTokenService.getIdUser()));
          this.addPost(createPost, idGroup).subscribe();
          observer.complete();
      })
    });
  }

  addPicture(pictureToAdd: CreatePicture) {

  }

  addVideo(videoToAdd: CreateVideo) {

  }

  deletePostById(idPost: number){
    return new Observable<Post>((observer) => {
      this.http.delete(this._url + idPost).subscribe((result: any) => {
        console.log(result);
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
