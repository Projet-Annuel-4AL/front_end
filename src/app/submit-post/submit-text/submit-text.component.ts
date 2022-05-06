import { Component} from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatMenu} from "@angular/material/menu";

@Component({
  selector: 'app-submit-text',
  templateUrl: './submit-text.component.html',
  styleUrls: ['./submit-text.component.scss']
})
export class SubmitTextComponent{

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

  }

}
