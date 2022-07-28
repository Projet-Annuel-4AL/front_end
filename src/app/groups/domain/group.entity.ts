import {Picture} from "../../post/post-body/domain/picture.entity";

export class Group {
  readonly idGroup: number;
  readonly name: string;
  readonly theme: string;
  readonly description: string;
  readonly idGroupOwner: number;
  numberOfSubscriber: number;
  readonly picture: Picture;

  constructor(idGroup: number,name: string, theme: string, description: string, idGroupOwner: number, picture: Picture) {
    this.idGroup = idGroup;
    this.name = name;
    this.theme = theme;
    this.description = description;
    this.idGroupOwner = idGroupOwner;
    this.numberOfSubscriber = 0;
    this.picture = picture;
  }
}
