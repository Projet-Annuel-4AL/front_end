import { Component, OnInit } from '@angular/core';
import {GroupService} from "../../../groups/service/group.service";
import {Group} from "../../../groups/domain/group.entity";

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss']
})

export class AdminGroupsComponent implements OnInit {

  groups!: Group[];
  displayedColumns: string[] = ['Id', 'Name', 'Theme', 'Description', 'Delete'];

  constructor(private _groupService: GroupService) { }

  ngOnInit(): void {
    this._groupService.getGroups().subscribe(groups => {
      this.groups = groups;
      console.log(this.groups);
    });
  }
  deleteGroup(idGroupToDelete: number){
    this._groupService.deleteGroupById(idGroupToDelete).subscribe();
  }
}
