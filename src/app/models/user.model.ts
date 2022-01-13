import { EmailValidator } from "@angular/forms";


export class User {
    id:number;

    username:string;
    password:string;
    email:string;
    isActive:boolean;
   constructor(id?:number,username?:string,password?:string,email?:string,isActive?:boolean){
    this.id=id; 
    this.username=username;
    this.password=password;
    this.email=email;
    this.isActive=isActive;

   }
  }
  