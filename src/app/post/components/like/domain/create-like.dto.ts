export class CreateLikeDto {
  readonly idUser: number;
  readonly idPost: number;


  constructor(idUser: number, idPost: number) {
    this.idUser = idUser;
    this.idPost = idPost;
  }
}
