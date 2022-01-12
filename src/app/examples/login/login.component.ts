import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user.model';

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

    constructor(private router:Router) { }

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
        if(this.username && this.password){
          console.log( "is logging In !");
    
          let user =new User();
          user.id =  Math.round(Math.random()*100000) ;
          user.username = this.username;
          user.password = this.password;
          user.email = this.email;
          this.newUser.emit(user);
          this.router.navigate(["/landing/{{user.id}}"]);

        }
        else{
            console.log(" is not logging in ")
        }
     
      }

}
