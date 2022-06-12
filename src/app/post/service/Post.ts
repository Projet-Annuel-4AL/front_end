export class Post {
  idPost: number;
  title: string;
  createdDate: string;
  idVideo: number;
  idPicture: number;
  idText: number;
  idCode: number;
  idUser: number;

  constructor(idPost = 0,title = '', createdDate = '', idVideo = 0, idPicture =0, idText =0, idCode=0, idUser=0) {
    this.idPost = idPost;
    this.title = title;
    this.createdDate = createdDate;
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
