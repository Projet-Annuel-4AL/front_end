export class CreateCode {
  readonly language: string;
  readonly content: string;

  constructor(language: string, content: string) {
    this.language = language;
    this.content = content;
  }
}
