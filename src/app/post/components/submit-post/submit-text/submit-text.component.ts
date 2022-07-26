import { Component} from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateText} from "../../../post-body/create-text.dto";
import {PostService} from "../../../service/post.service";
import {Router} from "@angular/router";
import {JwtTokenService} from "../../../../Authentication/services/jwt-token.service";
import {GroupService} from "../../../../groups/service/group.service";
import {Group} from "../../../../groups/domain/group.entity";

@Component({
  selector: 'app-submit-text',
  templateUrl: './submit-text.component.html',
  styleUrls: ['./submit-text.component.scss']
})
export class SubmitTextComponent{

  currentUser! : number
  groupList!: Group[];
  selectedValue!: string;
  constructor(private postService: PostService,
              private _router: Router,
              private _jwtTokenService: JwtTokenService,
              private _groupService: GroupService) {
    this.currentUser =  Number(this._jwtTokenService.getIdUser())
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Commencez à écrire...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['subscript','superscript','strikeThrough'],
      ['clearGlass'],
      ['customClasses', 'link', 'unlink', 'insertImage', 'insertVideo', 'insertHorizontalRule',
        'removeFormat','toggleEditorMode']
    ]
  };

  postForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required
    ]),
    description: new FormControl(null, [
      Validators.required
    ]),
    group: new FormControl(null, [

    ])
  })

  ngOnInit(): void {
    this._groupService.getGroupRelationByUserId(this.currentUser).subscribe(result=>{
      this.groupList = result;
      console.log("listes des groupes", this.groupList);
    });

  }

  submitPostForm() {
    const idGroup = this.postForm.value.group;
    const createdText: CreateText = new CreateText(this.postForm.value.description);
    this.postService.addText(createdText, this.postForm.value.title, idGroup).subscribe();
    this._router.navigateByUrl('');
  }

}
