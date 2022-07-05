import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../service/post.service";
import {Post} from "../../domain/post.entity";
import {Remark} from "./domain/remark.entity";
import {RemarksPostService} from "./service/remarks.post.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-remarks-post',
  templateUrl: './remarks-post.component.html',
  styleUrls: ['./remarks-post.component.scss']
})
export class RemarksPostComponent implements OnInit {
  post!: Post;
  remarks!: Remark[];
  language!: string;
  theme!: string;
  code!: string;
  output!: string;
  editorOptions!: any;

  constructor(
    private _postService: PostService,
    private _activatedRoute: ActivatedRoute,
    private _remarksService: RemarksPostService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const routeParams = this._activatedRoute.snapshot.paramMap;
    const idPost = Number(routeParams.get('idPost'));
    this.language = 'java';
    this.theme = 'vs-dark'
    this.editorOptions = {readOnly: true, theme: this.theme, language: this.language, automaticLayout: true};

    this._postService.getPostById(idPost).subscribe(post => {
      this.post = post;
      this.remarks = this.post.remarks;
      if (post.code !== null){
        this.code = post.code.content;
      }
    });
  }

  getLangNumber() {
    if (this.language == 'python') return 1;
    if (this.language == 'cpp') return 2;
    return 0;
  }

  onRunCode(){
    this.getLangNumber()
    const body = {language: this.getLangNumber(), code: this.code};

    this.http
      .post( "http://localhost:3000/api/compiler",body, {responseType: 'text'}).toPromise()
      .then(response => {
        this.output = response;
      })
      .catch( err => {
      });
  }
}
