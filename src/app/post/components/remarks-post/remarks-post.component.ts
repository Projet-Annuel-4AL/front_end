import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../service/post.service";
import {Post} from "../../domain/post.entity";
import {Remark} from "./domain/remark.entity";
import {RemarksPostService} from "./service/remarks.post.service";

@Component({
  selector: 'app-remarks-post',
  templateUrl: './remarks-post.component.html',
  styleUrls: ['./remarks-post.component.scss']
})
export class RemarksPostComponent implements OnInit {
  post!: Post;
  remarks!: Remark[];
  editorOptions!: any;

  constructor(
    private _postService: PostService,
    private _activatedRoute: ActivatedRoute,
    private _remarksService: RemarksPostService
  ) {}

  ngOnInit(): void {
    const routeParams = this._activatedRoute.snapshot.paramMap;
    const idPost = Number(routeParams.get('idPost'));
    this.editorOptions = {readOnly: true, theme: 'vs-dark', language: 'java', automaticLayout: true};

    this._postService.getPostById(idPost).subscribe(post => {
      this.post = post;
      this.remarks = this.post.remarks;
    });
  }

}
