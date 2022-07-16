export class CreateGroup {
  readonly name: string;
  readonly theme: string;
  readonly description: string;
  readonly idGroupOwner: number;

  constructor(name: string, theme: string, description: string, idGroupOwner: number) {
    this.name = name;
    this.theme = theme;
    this.description = description;
    this.idGroupOwner = idGroupOwner;
  }
}
