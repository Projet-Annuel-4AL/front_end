import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-user-group-dialog',
  templateUrl: './user-group-dialog.component.html',
  styleUrls: ['./user-group-dialog.component.scss']
})
export class UserGroupDialogComponent implements OnInit {

  userNameList!: string[]

  constructor(
    public dialogRef: MatDialogRef<UserGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {userList: string[]}) { }

  ngOnInit(): void {
    this.userNameList  = this.data.userList;
  }

}
