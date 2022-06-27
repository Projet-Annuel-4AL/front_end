export class User {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly mail: string;

  constructor() {
    this.id = 0;
    this.firstName = "";
    this.lastName = "";
    this.mail = "";
  }
}
