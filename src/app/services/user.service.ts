import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      name : "ali", 
      password : "12345",
      email: "ali@gmail.com",
    },
    {
      name : "sarah", 
      password : "12345",
      email: "sarah@gmail.com",
    },
    {
      name : "aymane", 
      password : "12345",
      email: "aymane@gmail.com",
    }
    
  ]
  constructor() { }
  getAssignments(): Observable<User[]> {
    return of(this.users)
  }
}