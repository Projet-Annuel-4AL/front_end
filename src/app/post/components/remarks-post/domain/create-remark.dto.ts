export class CreateRemark{
  readonly idPost: number;
  readonly idUser: number;
  readonly content: string;

  constructor(idPost: number, idUser: number, content: string) {
    this.idPost = idPost;
    this.idUser = idUser;
    this.content = content;
  }
}
