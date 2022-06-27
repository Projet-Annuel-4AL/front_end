import { Component, OnInit } from '@angular/core';
import {Post} from "./domain/Post";
import {PostService} from "./service/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts!: Post[];

  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
        this.posts = posts;
        if (this.posts.length > 0) {}
      }
    );
  }
}
