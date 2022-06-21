export class CreateVideo {
  readonly type: string;
  readonly url: string;

  constructor(type: string, url: string) {
    this.type = type;
    this.url = url;
  }
}
