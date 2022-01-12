import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user1: User=new User(Math.round(Math.random() *10000), "ali","12345","ali@gmail.com");
  user2: User=new User(Math.round(Math.random() *10000), "sarah","12345","sarah@gmail.com");
  user3: User=new User(Math.round(Math.random() *10000), "aymane","12345","aymane@gmail.com");

  users = [this.user1,this.user2,this.user3]
  constructor() { }
  getAssignments(): Observable<User[]>{
    return of(this.users)
  }
}