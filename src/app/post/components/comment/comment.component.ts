import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../domain/Post";
import {CommentService} from "./service/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() post!: Post

  constructor(private _commentService: CommentService) {
  }

  ngOnInit(): void {
  }

}
