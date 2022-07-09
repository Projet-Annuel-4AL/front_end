import {User} from "../../user/domain/user.entity";
import {Text} from "../post-body/domain/text.entity";
import {Code} from "../post-body/domain/code.entity";
import {Remark} from "../components/remarks-post/domain/remark.entity";
import {Like} from "../components/like/domain/like.entity";

export class Post {
  readonly idPost: number;
  readonly title: string;
           createdDate: string;
  readonly idVideo: number;
  readonly idPicture: number;
  readonly text: Text;
  readonly code: Code;
  readonly user: User;
  readonly remarks: Remark[];
  readonly likes: Like[];
  numberOfRemarks: number;

  constructor(idPost: number,title: string, createdDate: Date, idVideo: number,
              idPicture: number, text: Text, code: Code, user: User, remarks: Remark[],
              likes: Like[]) {
    this.idPost = idPost;
    this.title = title;
    this.createdDate = new Date(createdDate).toLocaleDateString("fr-FR");
    this.idVideo = idVideo;
    this.idPicture = idPicture;
    this.text = text;
    this.code = code;
    this.user = user;
    this.remarks = remarks;
    this.likes = likes;
    this.numberOfRemarks = 0;
  }


}
