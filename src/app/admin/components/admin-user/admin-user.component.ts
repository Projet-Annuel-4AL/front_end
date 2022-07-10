import { Component, OnInit } from '@angular/core';
import {User} from "../../../user/domain/user.entity";
import {UserService} from "../../../user/service/user.service";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})

export class AdminUserComponent implements OnInit {

  users!: User[];
  displayedColumns: string[] = ['Id', 'First name', 'Last name', 'mail', 'Delete'];

  constructor(
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this._userService.getAllUser().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });

  }

}
