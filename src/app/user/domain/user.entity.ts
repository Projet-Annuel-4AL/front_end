import {Picture} from "../../post/post-body/domain/picture.entity";

export class User {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly mail: string;
  readonly avatar: Picture;
  readonly admin: boolean;

  constructor(id: number, firstName: string, lastname: string, mail: string, avatar: Picture, admin: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastname;
    this.mail = mail;
    this.avatar = avatar;
    this.admin = admin;
  }
}
