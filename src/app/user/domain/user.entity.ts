export class User {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly mail: string;

  constructor(id: number, firstName: string, lastname: string, mail: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastname;
    this.mail = mail;
  }
}
