import {Component, OnInit} from '@angular/core';
import {Post} from "../../service/Post";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  posts!: Post[];

  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this._postService.getPosts().subscribe(posts => {
        this.posts = posts;
        if (this.posts.length > 0) {
          console.log("works")
        }
      }
    );
  }

  addPost(posts: Post[]): void {
    for (let post in posts) {
      this.posts.push(posts[post])
    }
  }
}
