import {Post} from "../../../domain/post.entity";

export class Remark {
  readonly id: number;
  readonly idParentRemark: number;
  readonly post: Post;
  readonly content: string;
  readonly idUser: number;
  createdDate: string;
  name: string | undefined;

  constructor(id: number,idParentRemark: number, post: Post, content: string, idUser: number,  createdDate: Date) {
    this.id = id;
    this.idParentRemark = idParentRemark;
    this.post = post;
    this.content = content;
    this.idUser = idUser;
    this.createdDate = new Date(createdDate).toLocaleDateString("fr-FR");
  }
}
