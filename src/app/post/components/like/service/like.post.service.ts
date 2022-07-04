import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Like} from "../domain/like.entity";
import {JwtTokenService} from "../../../../Authentication/services/jwt-token.service";
import {CreatePost} from "../../../domain/create-post.dto";
import {Observable} from "rxjs";
import {Post} from "../../../domain/post.entity";
import {CreateLikeDto} from "../domain/create-like.dto";

@Injectable()
export class LikePostService {
  private _url: string = "http://localhost:3000/api/likes/";

  isLiked: boolean = false;

  constructor(private http: HttpClient, private _jwtTokenService: JwtTokenService) {
  }

  getLikes(likes: Like[]){
    let idCurrentUser = this._jwtTokenService.getIdUser()
    let liked = false;
    likes.forEach((like) => {
      if(like.idUser == Number(idCurrentUser)){
        liked = true;
      }
    });

    this.isLiked = liked;
  }

  addLike(likeToAdd: CreateLikeDto) {
    return new Observable((observer) => {
      this.http.post(this._url, likeToAdd).subscribe((result: any) => {
        const like = new Like(result.idLike, result.idUser, result.idPost)
        console.log(like)
        observer.next(like);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  removeLike(idLike: number) {
    return new Observable<Like>((observer) => {
      this.http.delete(this._url + idLike).subscribe((result: any) => {
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
