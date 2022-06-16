export class CreatePicture {
  readonly type: string;
  readonly url: string;

  constructor(type: string, url: string) {
    this.type = type;
    this.url = url;
  }
}
