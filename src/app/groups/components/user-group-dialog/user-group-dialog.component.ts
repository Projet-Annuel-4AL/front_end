import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostService} from "../../../post/service/post.service";
import {Router} from "@angular/router";
import {DeletePostComponent} from "../../../post/components/delete-post/delete-post.component";
import {GroupRelationEntity} from "../../domain/group-relation.entity";
import {Group} from "../../domain/group.entity";

@Component({
  selector: 'app-user-group-dialog',
  templateUrl: './user-group-dialog.component.html',
  styleUrls: ['./user-group-dialog.component.scss']
})
export class UserGroupDialogComponent implements OnInit {

  relations!: GroupRelationEntity[]
  test!: string
  userNameList!: string[]

  constructor(
    public dialogRef: MatDialogRef<UserGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {userList: string[]},
    private router: Router) { }

  ngOnInit(): void {
    console.log("data", this.data)
    this.userNameList  = this.data.userList;
    console.log("data", this.userNameList)
    //this.relations = this.data.userList

  }

}
