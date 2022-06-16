export class CreateCode {
  readonly language: number;
  readonly content: string;

  constructor(language: number, content: string) {
    this.language = language;
    this.content = content;
  }
}
