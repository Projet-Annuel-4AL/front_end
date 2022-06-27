import {Post} from "../../../domain/post.entity";

export class Remarks {
  idRemark: number;
  idParentRemark: number;
  post: Post;
  content: string;

  constructor(idRemark: number,idParentRemark: number, post: Post, content: string) {
    this.idRemark = idRemark;
    this.idParentRemark = idParentRemark;
    this.post = post;
    this.content = content;
  }
}
