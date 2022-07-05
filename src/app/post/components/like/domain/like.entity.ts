export class Like {
  readonly idLike: number;
  readonly idUser: number;
  readonly idPost: number;

  constructor(idLike: number, idUser: number, idPost: number) {
    this.idLike = idLike;
    this.idUser = idUser;
    this.idPost = idPost;
  }
}
