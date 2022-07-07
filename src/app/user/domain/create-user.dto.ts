export class CreateUserDto{
  readonly firstName: string;
  readonly lastName: string;
  readonly mail: string;
  readonly password: string;

  constructor(firstName: string, lastName: string, mail: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.password= password;
  }
}
