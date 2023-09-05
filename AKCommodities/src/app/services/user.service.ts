import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public userAccounts=[
    {"username":"balajipuvvada","password":"balaji@password"}
  ]
  public isUserLogedIn=false;
  isUserExists(userObj:any){
    return this.userAccounts.some(obj => obj.username === userObj.username && obj.password === userObj.password)
  }
}
