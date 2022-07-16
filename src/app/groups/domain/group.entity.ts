export class Group {
  readonly idGroup: number;
  readonly name: string;
  readonly theme: string;
  readonly description: string;
  readonly idGroupOwner: number;
  numberOfSubscriber: number;

  constructor(idGroup: number,name: string, theme: string, description: string, idGroupOwner: number) {
    this.idGroup = idGroup;
    this.name = name;
    this.theme = theme;
    this.description = description;
    this.idGroupOwner = idGroupOwner;
    this.numberOfSubscriber = 0;
  }
}
