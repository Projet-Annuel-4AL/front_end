import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {CreateFollowDto} from "../domain/create-follow.dto";
import {Follow} from "../domain/follow";
import {Post} from "../../../../post/domain/post.entity";
import {Like} from "../../../../post/components/like/domain/like.entity";
@Injectable()
export class FollowService {
  private _url: string = "http://localhost:3000/api/follows/";

  constructor(private http: HttpClient) {
  }

  getFollowsByUserId(idUser: string | null){
    return new Observable<Follow[]>((observer) => {
      this.http.get(this._url + idUser).subscribe((results: any) => {
        const follows = [];
        for (const result of results) {
          const follow = new Follow(
            result.idFollow,
            result.idUserFollowing,
            result.idUserFollowed);
          follows.push(follow);
        }
        observer.next(follows);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  getIdFollowByUserFollowingAndUserFollowed(idUserFollowing: number, idUserFollowed: number){
    return new Observable<Follow>((observer) => {
      this.http.get(this._url + "?idUserFollowing=" + idUserFollowing + "&idUserFollowed=" + idUserFollowed).subscribe((result: any) => {
        const follow = new Follow(
          result.id,
          result.idUserFollowing,
          result.idUserFollowed);
        observer.next(follow);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  addFollow(followToAdd: CreateFollowDto) {
    return new Observable((observer) => {
      this.http.post(this._url, followToAdd).subscribe((result: any) => {
        const follow = new Follow(result.idFollow, result.idUserFollowing, result.idUserFollowed)
        console.log(follow)
        observer.next(follow);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  removeFollow(idFollow: number) {
    return new Observable<Follow>((observer) => {
      this.http.delete(this._url + "/" + idFollow).subscribe((result: any) => {
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
