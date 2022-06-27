import {User} from "../../user/domain/user.entity";
import {Text} from "../post-body/domain/text.entity";
import {Code} from "../post-body/domain/code.entity";

export class Post {
  idPost: number;
  title: string;
  createdDate: Date;
  idVideo: number;
  idPicture: number;
  text: Text;
  code: Code;
  user: User;

  constructor(idPost: number,title: string, idVideo: number, idPicture: number, text: Text, code: Code, user: User) {
    this.idPost = idPost;
    this.title = title;
    this.createdDate = new Date();
    this.idVideo = idVideo;
    this.idPicture = idPicture;
    this.text = text;
    this.code = code;
    this.user = user;
  }
}
