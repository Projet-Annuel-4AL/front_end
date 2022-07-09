import { Component, OnInit } from '@angular/core';
import {Post} from "./domain/post.entity";
import {PostService} from "./service/post.service";
import {LikePostService} from "./components/like/service/like.post.service";
import {DeletePostComponent} from "./components/delete-post/delete-post.component";
import {MatDialog} from "@angular/material/dialog";
import {JwtTokenService} from "../Authentication/services/jwt-token.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts!: Post[];
  editorOptions!: any;
  currentUser! : number

  constructor(private _postService: PostService, private _likeService: LikePostService, public dialog: MatDialog, private _jwtTokenService: JwtTokenService) {
    this.currentUser =  Number(this._jwtTokenService.getIdUser())
  }


  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
        this.posts = posts;
        this.editorOptions = {readOnly: true, theme: 'vs-dark', language: 'java', automaticLayout: true};
        if (this.posts.length > 0) {}
      }
    );

  }

  openDialog(idPostToDelete: number): void {
    console.log(idPostToDelete);
    let dialogRef = this.dialog.open(DeletePostComponent, {
      width: '400px',
      data: { idPost:  idPostToDelete}
    });
  }

}
