export class CreatePost {
  title: string;
  createdDate: Date;
  idVideo: number | undefined;
  idPicture: number | undefined;
  idText: number | undefined;
  idCode: number | undefined;
  idUser: number;

  constructor(title: string, idVideo: any, idPicture: any, idText: any, idCode: any, idUser: number) {
    this.title = title;
    this.createdDate = new Date();
    this.idVideo = idVideo;
    this.idPicture = idPicture;
    this.idText = idText;
    this.idCode = idCode;
    this.idUser = idUser;
  }
}
