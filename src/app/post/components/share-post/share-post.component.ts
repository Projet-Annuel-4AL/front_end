import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogModule,MatDialogRef } from "@angular/material/dialog";
import {DialogTemplateComponent} from "../../../dialog/components/dialog-template/dialog-template.component";


@Component({
  selector: 'app-share-post',
  templateUrl: './share-post.component.html',
  styleUrls: ['./share-post.component.scss']
})
export class SharePostComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openShareDialog(){
    let dialogRef = this.dialog.open(DialogTemplateComponent, {
      width: '400px'
    });
  }
}
