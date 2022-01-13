import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    @Output() newUser= new EventEmitter<User>();
    username: string = ""
    password!: string 
    email!: string
    loginError : string;
    currentUser : User;
    constructor(private router:Router, private userService: UserService) {
  
     }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
    onSubmit(){
      console.log(" is not logging in ")
        if(this.email && this.password){
          console.log( "is logging In !");
    
          // let newUser =new User();
          // newUser.id = Math.round(Math.random() *10000);
          // newUser.username = this.username;
          // newUser.password = this.password;
          // newUser.email = this.username;
        let users=   this.userService.getAllUsers();
          for(let user of users) {
            if(user.email==this.email && user.password==this.password)
            {
              console.log(`Welcome to the app ${this.username}`);
              this.loginError =null;
              this.currentUser = user;
              this.userService.setCurrentUser(user);
              this.newUser.emit(user);
              this.router.navigate(["/landing/{{newUser.id}}"]);
            
              break;
            }
            else {
              console.log("Your email or password are not correct!");
              this.loginError ="Email or password is incorrect";
                   this.router.navigate(["/login"]);
            }
            
          }
          
          // this.newUser.emit(user);
        // this.userService.addUser(user);
        console.log(this.userService.getAllUsers());
          // this.router.navigate(["/landing/{{user.id}}"]);

        }
        else{
            console.log(" is not logging in ")
        }
     
      }
      // loginUser(event){
      //   event.preventDefault();
      //   console.log(event);
      // }


      getEmitter(){
        return this.newUser;
      }

}
