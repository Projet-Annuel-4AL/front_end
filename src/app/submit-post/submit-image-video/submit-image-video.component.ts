import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-submit-image-video',
  templateUrl: './submit-image-video.component.html',
  styleUrls: ['./submit-image-video.component.scss']
})
export class SubmitImageVideoComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  file:any
  getFile(event: any){
    this.file = event.target.files[0];
    console.log("file", this.file);
  }

  @HostListener('dragover', ['$event']) onDragOver(evt: any){
    evt
  }

}
