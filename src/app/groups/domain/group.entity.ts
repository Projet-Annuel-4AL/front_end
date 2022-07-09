export class Group {
  readonly idGroup: number;
  readonly name: string;
  readonly theme: string;
  readonly description: string

  constructor(idGroup: number,name: string, theme: string, description: string) {
    this.idGroup = idGroup;
    this.name = name;
    this.theme = theme;
    this.description = description;
  }
}
