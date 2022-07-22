export class UpdateCollabCodeDto {
  readonly idGroup: number;
  readonly content: string;

  constructor(idGroup: number, content: string) {
    this.idGroup = idGroup;
    this.content = content;
  }
}
