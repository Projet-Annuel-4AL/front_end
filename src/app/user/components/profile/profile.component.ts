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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user! : User
  idUser! : number
  idUserFollowed!: number
  isFollowed!: boolean
  posts!: Post[]
  editorOptions!: any

  constructor(private _jwtTokenService: JwtTokenService, private _userService: UserService,
              private _postService: PostService, private _followService: FollowService, private route: ActivatedRoute) {
    this.idUser = Number(this._jwtTokenService.getIdUser())
  }

  ngOnInit(): void {
    this.idUserFollowed = Number(this.route.snapshot.paramMap.get('idUser'));
    this.getUserById()
    this.getPostsByIdUser()
    this.editorOptions = {readOnly: true, theme: 'vs-dark', language: 'java', automaticLayout: true};
  }

  getUserById(){
    this._userService.getUserByID(this.idUser).subscribe( user => {
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

  addFollow(){
    let createFollowDto = new CreateFollowDto(this.idUser, this.idUserFollowed)
    this._followService.addFollow(createFollowDto).subscribe()
  }


  removeFollow(){
    this._followService.getIdFollowByUserFollowingAndUserFollowed(this.idUser, this.idUserFollowed).subscribe(follow => {
      this._followService.removeFollow(follow.idFollow).subscribe()
    });
  }

  getPostsByIdUser(){
    this._postService.getPostsByUserId().subscribe(posts => {
      this.posts = posts
    })
  }
}
