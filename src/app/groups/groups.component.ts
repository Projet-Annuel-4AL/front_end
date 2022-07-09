import { Component, OnInit } from '@angular/core';
import {Like} from "../post/components/like/domain/like.entity";
import {Group} from "./domain/group.entity";
import {GroupService} from "./service/group.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups!: Group[]

  constructor(private _groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups()
  }

  getGroups(){
    this._groupService.getGroups().subscribe( groups => {
      this.groups = groups
    })
  }
}
