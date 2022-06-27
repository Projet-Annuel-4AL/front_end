import { Component, OnInit } from '@angular/core';
import {Post} from "./domain/post.entity";
import {PostService} from "./service/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts!: Post[];
  editorOptions!: any;


  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
        this.posts = posts;
        this.editorOptions = {readOnly: true, theme: 'vs-dark', language: 'java', automaticLayout: true};
        if (this.posts.length > 0) {}
      }
    );
  }
}
