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
    ]),
    description: new FormControl(null, [
      Validators.required
    ]),
  })

  files: File[] = [];

  onFilesAdded(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);

    // @ts-ignore
    this.description.clearValidators()
    this.description?.updateValueAndValidity()

    this.readFile(this.files[0]).then((fileContents: any) => {
      console.log(fileContents);
    })
  }

  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = e => {
        // @ts-ignore
        return resolve((e.target as FileReader).result);
      };

      reader.onerror = e => {
        console.error(`FileReader failed on file ${file.name}.`);
        return reject(null);
      };

      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }

      reader.readAsDataURL(file);
    });
  }

  onRemove(event: File) {
    console.log(event);
    // @ts-ignore
    this.description.setValidators([Validators.required]);
    this.description?.updateValueAndValidity();
    this.files.splice(this.files.indexOf(event), 1);
  }

  get description() {
    return this.postForm.get('description');
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  submitPostForm(){

  }

}
