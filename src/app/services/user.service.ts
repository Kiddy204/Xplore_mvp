import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : User[]= [];
  isLoggedIn = false;
  currentUser : User;
  user1: User=new User(Math.round(Math.random() *10000), "Oussama","12345","oussama@gmail.com");
  // user2: User=new User(Math.round(Math.random() *10000), "sarah","12345","sarah@gmail.com");
  // user3: User=new User(Math.round(Math.random() *10000), "aymane","12345","aymane@gmail.com");
  
  // users = [this.user1,this.user2,this.user3]
  constructor() { this.users.push(this.user1)}
  getAssignments(): Observable<User[]>{
    return of(this.users)
  }
  addUser(user:User){
    this.users.push(user);
  }
  getCurrentUser(){
    return this.currentUser;
  }
  setCurrentUser(newUser:User){
    this.currentUser= newUser;
  }
  getAllUsers(){
    return this.users;
  }

}