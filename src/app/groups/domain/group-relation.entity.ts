export class GroupRelationEntity{
  readonly id: number;
  readonly idUser: number;
  readonly idGroup: number;

  constructor(id: number,idUser: number, idGroup: number) {
    this.id = id;
    this.idUser = idUser;
    this.idGroup = idGroup;
  }
}
