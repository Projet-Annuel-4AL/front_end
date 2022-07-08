import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogModule,MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.scss']
})
export class DialogTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
