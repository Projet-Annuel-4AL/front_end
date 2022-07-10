import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../post/service/post.service";
import {User} from "../../../user/domain/user.entity";
import {Post} from "../../../post/domain/post.entity";
import {DeletePostComponent} from "../../../post/components/delete-post/delete-post.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  posts!: Post[];
  editorOptions!: any;
  displayedColumns: string[] = ['Id', 'Title', 'Created date', 'Text', 'Code', 'User','Remarks', 'Likes','Delete'];

  constructor(
    private _postService: PostService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._postService.getPosts().subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
        this.editorOptions = {readOnly: true, theme: 'vs-dark', language: 'java', automaticLayout: true};
        if (this.posts.length > 0) {}
      }
    );
  }
  openDialog(idPostToDelete: number): void {
    console.log(idPostToDelete);
    let dialogRef = this.dialog.open(DeletePostComponent, {
      width: '400px',
      data: {idPost: idPostToDelete}
    });
  }
}
