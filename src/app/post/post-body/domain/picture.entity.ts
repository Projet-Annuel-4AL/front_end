export class Picture {
  readonly id: number;
  readonly url: string;
  readonly key: string;


  constructor(id: number, url: string, key: string) {
    this.id = id;
    this.url = url;
    this.key = key;
  }
}
