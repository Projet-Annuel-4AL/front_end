import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Group} from "../domain/group.entity";
import {CreateGroup} from "../domain/create-group.dto";
import {Router} from "@angular/router";
import {GroupRelationEntity} from "../domain/group-relation.entity";
import {CreateRelationDto} from "../domain/create-relation.dto";
import {ApiUrlConstant} from "../../apiUrlConstant";
import {JwtTokenService} from "../../Authentication/services/jwt-token.service";

@Injectable()
export class GroupService {
  private _url: string = ApiUrlConstant.HOST+"groups/";
  currentUser! : number;

  constructor(private http: HttpClient,
              private _router: Router,
              private _jwtTokenService: JwtTokenService) {
    this.currentUser =  Number(this._jwtTokenService.getIdUser());
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
            result.description,
            result.idGroupOwner);
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
            result.description,
            result.idGroupOwner);
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
          result.description,
          result.idGroupOwner);
        observer.next(group);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  addGroup(groupToAdd: CreateGroup) {
      this.http.post(this._url, groupToAdd).subscribe((result: any) => {
          const relation = new CreateRelationDto(this.currentUser,result.id);
          this.addRelation(relation);
          this._router.navigateByUrl('groups').then(() => {
            window.location.reload()
          })
      }
      );
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

  getUserSubscribeByGroup(idGroup: number){
    return new Observable<GroupRelationEntity[]>((observer) => {
      this.http.get(ApiUrlConstant.HOST+"relation-group-user/users/" + idGroup).subscribe((results: any) => {
        const relations = [];
        for (const result of results) {
          const relation = new GroupRelationEntity(
            result.id,
            result.idUser,
            result.idGroup);
          relations.push(relation);
        }
        observer.next(relations);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  addRelation(relation: CreateRelationDto) {
    this.http.post(ApiUrlConstant.HOST+"relation-group-user/",relation).subscribe((results: any) => {
    });
  }

  getRelationByUserIdAndGroupId(idUser: number, idGroup: number){
    return new Observable<GroupRelationEntity>((observer) => {
      this.http.get(ApiUrlConstant.HOST+"relation-group-user/" + "?idUser=" + idUser + "&idGroup=" + idGroup).subscribe((result: any) => {
        const relationEntity = new GroupRelationEntity(
          result.id,
          result.idUser,
          result.idGroup);
        observer.next(relationEntity);
        observer.complete();
      }, error => {
        observer.error(error);
        observer.complete();
      })
    });
  }

  removeRelation(idRelation: number) {
    this.http.delete(ApiUrlConstant.HOST+"relation-group-user/" + idRelation)
      .subscribe({
        next: data => {
          console.log('Delete successful');
        },
        error: error => {
          console.error('There was an error!');
        }
      });
  }
}
