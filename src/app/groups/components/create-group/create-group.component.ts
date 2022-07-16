import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateGroup} from "../../domain/create-group.dto";
import {JwtTokenService} from "../../../Authentication/services/jwt-token.service";
import {GroupService} from "../../service/group.service";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  createGroupForm: FormGroup;
  constructor(private _jwtTokenService: JwtTokenService, private _groupService: GroupService) {
    this.createGroupForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required
      ]),
      theme: new FormControl(null, [
        Validators.required
      ]),
      description: new FormControl(null, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
  }

  submitCreateGroupForm(){
    const group = new CreateGroup(this.createGroupForm.value.name,
      this.createGroupForm.value.theme,
      this.createGroupForm.value.description,
      Number(this._jwtTokenService.getIdUser()));
    this._groupService.addGroup(group);
  }
}
