import {Component, Input, OnInit} from '@angular/core';
import {LikePostService} from "./service/like.post.service";
import {Post} from "../../domain/post.entity";
import {Like} from "./domain/like.entity";
import {CreateLikeDto} from "./domain/create-like.dto";
import {JwtTokenService} from "../../../Authentication/services/jwt-token.service";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
 @Input() post!: Post
 isLiked!: boolean
 idUser!: number
 like!: Like
 countLike!: number

  constructor(private _likeService: LikePostService, private _jwtTokenService: JwtTokenService) {
   this.idUser = Number(_jwtTokenService.getIdUser())
  }

  ngOnInit(): void {
    this.getLikes(this.post.likes);
  }

  getLikes(likes: Like[]){
    this._likeService.getLikes(likes)
    this.isLiked = this._likeService.isLiked
    this.countLike =  this._likeService.getCountLikes(this.post)
    console.log(this.countLike)
  }

  setIsLike() {
   if(this.idUser){
     this.isLiked = !this.isLiked;
     if(this.isLiked){
       this.addLike()
     } else {
       this.removeLike()
     }
   } else{
      alert("il faut être connecté pour pouvoir aimer une publication ")
    }
  }

  addLike(){
    let createLikeDto = new CreateLikeDto(this.idUser, this.post.idPost)
    this._likeService.addLike(createLikeDto).subscribe()
  }

  removeLike(){
    this._likeService.getIdByIdPostAndIdUser(this.idUser, this.post.idPost).subscribe( like => {
      this._likeService.removeLike(like.idLike).subscribe()
    });
  }
}
