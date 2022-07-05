import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Like} from "../domain/like.entity";
import {JwtTokenService} from "../../../../Authentication/services/jwt-token.service";
import {Observable} from "rxjs";
import {CreateLikeDto} from "../domain/create-like.dto";
import {Post} from "../../../domain/post.entity";

@Injectable()
export class LikePostService {
  private _url: string = "http://localhost:3000/api/likes";

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

  getCountLikes(post: Post){
    return post.likes.length
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
      this.http.delete(this._url + "/" + idLike).subscribe((result: any) => {
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  getIdByIdPostAndIdUser(idUser: number, idPost: number){
    return new Observable<Like>((observer) => {
      this.http.get(this._url + "?idUser=" + idUser + "&idPost=" + idPost).subscribe((result: any) => {
        const like = new Like(
          result.id,
          result.idUser,
          result.idPost);
        observer.next(like);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
