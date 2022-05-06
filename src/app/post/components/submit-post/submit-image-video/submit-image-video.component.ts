import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-submit-image-video',
  templateUrl: './submit-image-video.component.html',
  styleUrls: ['./submit-image-video.component.scss']
})
export class SubmitImageVideoComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required
    ])
  })

  files: File[] = [];

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (!this.files) {
      console.error('No file to read. Please provide a file using the [file] Input property.');
      return;
    }

    console.log(this.files);
  }

}
