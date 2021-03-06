import { Component} from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateText} from "../../../post-body/create-text.dto";
import {PostService} from "../../../service/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submit-text',
  templateUrl: './submit-text.component.html',
  styleUrls: ['./submit-text.component.scss']
})
export class SubmitTextComponent{


  constructor(private postService: PostService,
              private _router: Router) {
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
    ])
  })

  submitPostForm() {
    const createdText: CreateText = new CreateText(this.postForm.value.description);
    this.postService.addText(createdText, this.postForm.value.title).subscribe();
    this._router.navigateByUrl('');
  }

}
