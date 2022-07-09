export class CreateGroup {
  readonly name: string;
  readonly theme: string;

  constructor(name: string, theme: string) {
    this.name = name;
    this.theme = theme;
  }
}
