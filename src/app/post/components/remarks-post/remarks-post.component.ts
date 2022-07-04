import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../service/post.service";
import {Post} from "../../domain/post.entity";
import {Remark} from "./domain/remark.entity";
import {RemarksPostService} from "./service/remarks.post.service";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JwtTokenService} from "../../../Authentication/services/jwt-token.service";
import {CreateRemark} from "./domain/create-remark.dto";
import {CreatePost} from "../../domain/create-post.dto";
import {Observable} from "rxjs";
import {User} from "../../../user/domain/user.entity";
import {UserService} from "../../../user/service/user.service";

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
  commentForm =  new FormGroup({
    content: new FormControl(null, [
      Validators.required
    ])
  });



  constructor(
    private _postService: PostService,
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute,
    private _remarksService: RemarksPostService,
    private _jwtTokenService: JwtTokenService,
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
      this._userService.getUserByID(2).subscribe(user =>{
        let test = user.lastName;
        console.log(test);
      });

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
        console.log(err)
      });
  }

  submitCommentForm() {
    const remark = new CreateRemark(this.post.idPost, Number(this._jwtTokenService.getIdUser()), this.commentForm.value.content);
    console.log(remark);
    return this.http.post("http://localhost:3000/api/remarks", remark).subscribe((result: any) => {
        console.log(result)
      this.commentForm.reset();
      this.ngOnInit();
    });
  }

}
