import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Group} from "../domain/group.entity";
import {CreateGroup} from "../domain/create-group.dto";

@Injectable()
export class GroupService {
  private _url: string = "http://localhost:3000/api/groups/";

  constructor(private http: HttpClient) {
  }

  getGroups() {
    return new Observable<Group[]>((observer) => {
      this.http.get(this._url).subscribe((results: any) => {
        const groups = [];
        for (const result of results) {
          const group = new Group(
            result.id,
            result.name,
            result.theme,
            result.description);
          groups.push(group);
        }
        observer.next(groups);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  getGroupsByTheme(theme: string) {
    return new Observable<Group[]>((observer) => {
      this.http.get(this._url + theme).subscribe((results: any) => {
        const groups = [];
        for (const result of results) {
          const group = new Group(
            result.id,
            result.name,
            result.theme,
            result.description);
          groups.push(group);
        }
        observer.next(groups);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  getGroupById(idGroup: number) {
    return new Observable<Group>((observer) => {
      this.http.get(this._url + idGroup).subscribe((result: any) => {
        const group = new Group(
          result.id,
          result.name,
          result.theme,
          result.description);
        observer.next(group);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  addGroup(groupToAdd: CreateGroup) {
    return new Observable((observer) => {
      this.http.post(this._url, groupToAdd).subscribe((result: any) => {
        const group = new Group(result.id, result.name, result.theme, result.description)
        console.log(group)
        observer.next(group);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  deleteGroupById(idGroup: number){
    return new Observable<Group>((observer) => {
      this.http.delete(this._url + idGroup).subscribe((result: any) => {
        observer.next(result);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }
}
