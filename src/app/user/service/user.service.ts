import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../domain/user.entity";
import {Post} from "../../post/domain/post.entity";
import {PostService} from "../../post/service/post.service";


@Injectable()
export class UserService {
  private _url: string = "http://localhost:3000/api/users/";

  constructor(private http: HttpClient) {
  }

  getUserByID(idUser: number) {
    return new Observable<User>((observer) => {
      this.http.get("http://localhost:3000/api/users/id/" + idUser).subscribe((result: any) => {
        const user = new User(
          result.id,
          result.firstName,
          result.lastName,
          result.mail);
        observer.next(user);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
