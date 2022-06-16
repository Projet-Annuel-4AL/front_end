export class Code {
  id: number;
  language: number;
  content: string;

  constructor(id: number, language: number, content: string) {
    this.id = id;
    this.language = language;
    this.content = content;
  }
}
