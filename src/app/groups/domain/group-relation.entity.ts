import {User} from "../../user/domain/user.entity";

export class GroupRelationEntity{
  readonly id: number;
  readonly idUser: number;
  readonly idGroup: number;
  user!: User;

  constructor(id: number,idUser: number, idGroup: number) {
    this.id = id;
    this.idUser = idUser;
    this.idGroup = idGroup;
  }
}
