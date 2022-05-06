import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-submit-image-video',
  templateUrl: './submit-image-video.component.html',
  styleUrls: ['./submit-image-video.component.scss']
})
export class SubmitImageVideoComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required
    ]),
    description: new FormControl(null, [
      Validators.required
    ])
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  submitPostForm() {

  }


}
