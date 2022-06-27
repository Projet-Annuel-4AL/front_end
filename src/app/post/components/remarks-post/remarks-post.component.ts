import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PostService} from "../../service/post.service";
import {Post} from "../../domain/Post";
import {Observable} from "rxjs";

@Component({
  selector: 'app-remarks-post',
  templateUrl: './remarks-post.component.html',
  styleUrls: ['./remarks-post.component.scss']
})
export class RemarksPostComponent implements OnInit {
  post!: Post;

  constructor(private _postService: PostService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this._activatedRoute.snapshot.paramMap;
    const idPost = Number(routeParams.get('idPost'));

    this._postService.getPostById(idPost).subscribe(post => {
      this.post = post;
      if (this.post == null) {}
    });

    console.log(this.post);
  }

}
