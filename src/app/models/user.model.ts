export class User {
    id!:number;
    username!:string;
    password!:string;
    email!:string;

    constructor(id:number, username:string, password:string,email:string){
      return new User(id, username, password, email);
    }
  }
  