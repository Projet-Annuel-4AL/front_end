import { Component, OnInit } from '@angular/core';
import {Group} from "../../domain/group.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {GroupService} from "../../service/group.service";
import {JwtTokenService} from "../../../Authentication/services/jwt-token.service";
import {UserService} from "../../../user/service/user.service";
import {GroupRelationEntity} from "../../domain/group-relation.entity";
import {CreateRelationDto} from "../../domain/create-relation.dto";
import {Post} from "../../../post/domain/post.entity";
import {MatDialog} from "@angular/material/dialog";
import {UserGroupDialogComponent} from "../user-group-dialog/user-group-dialog.component";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  img = 'https://images2.alphacoders.com/516/thumb-1920-516664.jpg';
  group! : Group;
  currentUser! : number
  creatorName!: string;
  isSubscribe: boolean = false;
  idRelation!: number;
  groupRelation!: GroupRelationEntity[];
  posts!: Post[];
  editorOptions!: any;
  nbSubscribe!: number;
  constructor(private _activatedRoute: ActivatedRoute,
              private _groupService: GroupService,
              private _jwtTokenService: JwtTokenService,
              private _userService: UserService,
              private _router: Router,
              public dialog: MatDialog) {
    this.currentUser =  Number(this._jwtTokenService.getIdUser())
  }

  ngOnInit(): void {
    this.editorOptions = {readOnly: true, theme: 'vs-dark', language: 'java', automaticLayout: true};
    const routeParams = this._activatedRoute.snapshot.paramMap;
    const idGroup = Number(routeParams.get('idGroup'));
    this.getPostFromGroup(idGroup);
    this._groupService.getGroupById(idGroup).subscribe(group=>{
      this.group = group;
      this._userService.getUserByID(this.group.idGroupOwner).subscribe(user =>{
        this.creatorName = user.firstName;
      });
      this.checkIfUserIsSubscribe();
    });
    this._groupService.getUserSubscribeByGroup(idGroup).subscribe(result=>{
      this.groupRelation = result;
    });
    console.log(this.groupRelation);

  }

  deleteGroup(idGroupToDelete: number){
    this._groupService.deleteGroupById(idGroupToDelete).subscribe(result=>{
      this._router.navigateByUrl('groups').then(() => {
        window.location.reload()
      })
      }
    );
  }

  setIsSubscribe(){
    this.isSubscribe = !this.isSubscribe;
    if(this.isSubscribe){
      this.addSubscribe()
    } else {
      this.removeSubscribe()
    }
  }
  addSubscribe(){
    let createRelationDto = new CreateRelationDto(this.currentUser,this.group.idGroup);
    console.log(createRelationDto);
    this._groupService.addRelation(createRelationDto);
  }

  removeSubscribe(){
    this._groupService.removeRelation(this.idRelation);
  }
  checkIfUserIsSubscribe(){
    this._groupService.getRelationByUserIdAndGroupId(this.currentUser, this.group.idGroup).subscribe(result => {
      if(result != undefined){
        this.isSubscribe = true;
        this.idRelation = result.id;
      }
    })
  }

  getPostFromGroup(idGroup: number){
    this._groupService.getRelationGroupPostByIdGroup(idGroup).subscribe(result=>{
      console.log('test get post',result);
      this.posts = result;
    });
  }

  openDialog(idGroup: number): void {
    console.log(idGroup)

    this._groupService.getUserSubscribeByGroup(idGroup).subscribe(results=>{
      const listUser = [];
      for (const result of results) {
        listUser.push(result.user.firstName);
      }
      let dialogRef = this.dialog.open(UserGroupDialogComponent, {
        data: { listUser: listUser}
      });
    });;

  }
}
