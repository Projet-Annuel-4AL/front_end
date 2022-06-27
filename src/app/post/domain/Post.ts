import {User} from "../../user/domain/user.entity";

export class Post {
  idPost: number;
  title: string;
  createdDate: Date;
  idVideo: number;
  idPicture: number;
  idText: number;
  idCode: number;
  idUser: number;

  constructor(idPost: number,title: string, idVideo: number, idPicture: number, idText: number, idCode: number, idUser: number) {
    this.idPost = idPost;
    this.title = title;
    this.createdDate = new Date();
    this.idVideo = idVideo;
    this.idPicture = idPicture;
    this.idText = idText;
    this.idCode = idCode;
    this.idUser = idUser;
  }

  loadFromJson(jsonElement: any){
    Object.assign(this, jsonElement);
  }

}
