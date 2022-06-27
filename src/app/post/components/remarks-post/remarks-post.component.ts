import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../service/post.service";
import {Post} from "../../domain/Post";
import {Remarks} from "./domain/Remarks";
import {RemarksPostService} from "./service/remarks.post.service";

@Component({
  selector: 'app-remarks-post',
  templateUrl: './remarks-post.component.html',
  styleUrls: ['./remarks-post.component.scss']
})
export class RemarksPostComponent implements OnInit {
  post!: Post;
  remarks!: Remarks[];

  constructor(private _postService: PostService, private _activatedRoute: ActivatedRoute, private _remarksService: RemarksPostService) {
  }

  ngOnInit(): void {
    const routeParams = this._activatedRoute.snapshot.paramMap;
    const idPost = Number(routeParams.get('idPost'));

    this._postService.getPostById(idPost).subscribe(post => {
      this.post = post;
      if (this.post == null) {}
    });

    this._remarksService.getRemarksByIdPost(idPost).subscribe(remarks => {
      this.remarks = remarks;
      if(this.remarks == null){}

    })

    console.log(this.remarks);
  }

}
