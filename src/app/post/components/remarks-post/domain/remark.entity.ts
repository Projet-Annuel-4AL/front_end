import {Post} from "../../../domain/post.entity";

export class Remark {
  readonly idRemark: number;
  readonly idParentRemark: number;
  readonly post: Post;
  readonly content: string;

  constructor(idRemark: number,idParentRemark: number, post: Post, content: string) {
    this.idRemark = idRemark;
    this.idParentRemark = idParentRemark;
    this.post = post;
    this.content = content;
  }
}
