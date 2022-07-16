export class CreateRelationDto {
  readonly idUser: number;
  readonly idGroup: number;

  constructor(idUser: number, idGroup: number) {
    this.idUser = idUser;
    this.idGroup = idGroup;
  }
}
