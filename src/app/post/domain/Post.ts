export class Post {
  idPost: number;
  title: string;
  createdDate: Date;
  idVideo: number;
  idPicture: number;
  idText: number;
  idCode: number;
  idUser: number;

  constructor(idPost = 0,title = '', idVideo = 0, idPicture =0, idText =0, idCode=0, idUser=0) {
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
