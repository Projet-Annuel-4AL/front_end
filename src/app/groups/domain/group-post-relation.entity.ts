export class GroupPostRelationEntity{
  readonly id: number;
  readonly idPost: number;
  readonly idGroup: number;

  constructor(id: number,idPost: number, idGroup: number) {
    this.id = id;
    this.idPost = idPost;
    this.idGroup = idGroup;
  }
}
