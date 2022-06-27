export class Remarks {
  idRemark: number;
  idParentRemark: number;
  idPost: number;
  content: string;

  constructor(idRemark: number,idParentRemark: number, idPost: number, content: string) {
    this.idRemark = idRemark;
    this.idParentRemark = idParentRemark;
    this.idPost = idPost;
    this.content = content;
  }
}
