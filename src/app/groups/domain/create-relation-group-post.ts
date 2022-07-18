export class CreateRelationGroupPost {
  readonly idPost: number;
  readonly idGroup: number;

  constructor(idPost: number, idGroup: number) {
    this.idPost = idPost;
    this.idGroup = idGroup;
  }
}
