import {User} from "../../user/domain/user.entity";
import {Text} from "../post-body/domain/text.entity";
import {Code} from "../post-body/domain/code.entity";
import {Remark} from "../components/remarks-post/domain/remark.entity";

export class Post {
  readonly idPost: number;
  readonly title: string;
  readonly createdDate: Date;
  readonly idVideo: number;
  readonly idPicture: number;
  readonly text: Text;
  readonly code: Code;
  readonly user: User;
  readonly remarks: Remark[];

  constructor(idPost: number,title: string, idVideo: number, idPicture: number, text: Text, code: Code, user: User, remarks: Remark[]) {
    this.idPost = idPost;
    this.title = title;
    this.createdDate = new Date();
    this.idVideo = idVideo;
    this.idPicture = idPicture;
    this.text = text;
    this.code = code;
    this.user = user;
    this.remarks = remarks
  }
}
