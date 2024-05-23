export class User {
  /*   userName: string | null;
    email: string | null;
    password: string | null;
 */

  constructor(
    public username: string | null,
    public email: string | null,
    public password: string | null
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
