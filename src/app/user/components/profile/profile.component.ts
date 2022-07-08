import { Component, OnInit } from '@angular/core';
import {JwtTokenService} from "../../../Authentication/services/jwt-token.service";
import {UserService} from "../../service/user.service";
import {User} from "../../domain/user.entity";
import {CreateLikeDto} from "../../../post/components/like/domain/create-like.dto";
import {PostService} from "../../../post/service/post.service";
import {Post} from "../../../post/domain/post.entity";
import {FollowService} from "./service/follow.service";
import {CreateFollowDto} from "./domain/create-follow.dto";
import {ActivatedRoute} from "@angular/router";
import {LikePostService} from "../../../post/components/like/service/like.post.service";
import {Follow} from "./domain/follow";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user! : User
  idUserToGet! : number
  currentUser!: number
  isFollowed: boolean = false
  posts!: Post[]
  editorOptions!: any
  idFollow! : number
  followingUsers! : Follow[]
  followedUsers! : Follow[]

  constructor(private _jwtTokenService: JwtTokenService, private _userService: UserService,
              private _postService: PostService, private _followService: FollowService, private route: ActivatedRoute)
  {
    this.idUserToGet = Number(this.route.snapshot.paramMap.get('idUser'))
    this.currentUser =  Number(this._jwtTokenService.getIdUser())
  }

  ngOnInit(): void {
    this.checkIfUserOnPageIsFollowedByCurrentUser()
    this.getUserById()
    this.getPostsByIdUser(this.idUserToGet)
    this.editorOptions = {readOnly: true, theme: 'vs-dark', language: 'java', automaticLayout: true};
  }

  getUserById(){
    this._userService.getUserByID(this.idUserToGet).subscribe( user => {
      this.user = user
    })
  }

  setIsFollowed(){
    this.isFollowed = !this.isFollowed;
    if(this.isFollowed){
      this.addFollow()
    } else {
      this.removeFollow()
    }
  }

  checkIfUserOnPageIsFollowedByCurrentUser(){
    this._followService.getIdFollowByUserFollowingAndUserFollowed(this.currentUser, this.idUserToGet).subscribe(follow => {
      if(follow.idUserFollowing == this.currentUser){
        this.isFollowed = true
        this.idFollow = follow.idFollow
      }
    })
  }

  addFollow(){
    let createFollowDto = new CreateFollowDto(this.currentUser, this.idUserToGet)
    this._followService.addFollow(createFollowDto).subscribe()
  }

/*
  getUsersFollowedByCurrentUser(){
    this._followService.getUsersFollowedByUserId(this.currentUser).subscribe( follows => {
      this.followedUsers = follows
    })
  }

  getUsersFollowingCurrentUser(){
    this._followService.getUserFollowingByUserId(this.currentUser).subscribe( follows => {
      this.followingUsers = follows
    })
  }
*/
  removeFollow(){
      this._followService.removeFollow(this.idFollow).subscribe()
  }

  getPostsByIdUser(idUserToGet: number){
    this._postService.getPostsByUserId(idUserToGet).subscribe(posts => {
      this.posts = posts
    })
  }
}
