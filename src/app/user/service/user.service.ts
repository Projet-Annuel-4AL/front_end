import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../domain/user.entity";


@Injectable()
export class UserService {
  private _url: string = "http://52.208.34.20:3000/api/users/";

  constructor(private http: HttpClient) {
  }

  getUserByID(idUser: number) {
    return new Observable<User>((observer) => {
      this.http.get("http://52.208.34.20:3000/api/users/id/" + idUser).subscribe((result: any) => {
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


  getAllUser() {
    return new Observable<User[]>((observer) => {
      this.http.get(this._url).subscribe((results: any) => {
        const users = [];
        for (const result of results) {
          const user = new User(
            result.id,
            result.firstName,
            result.lastName,
            result.mail);
          users.push(user);
        }
        observer.next(users);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
