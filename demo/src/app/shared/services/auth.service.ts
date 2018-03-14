import { Injectable } from '@angular/core'
import {ConfigService} from "./config.services";
import { UUID } from 'angular2-uuid';

import {User} from "../models/user.model";
import {ListService} from "../../system/shared/services/list.services";

@Injectable()
export class AuthService {
  private isAuthenticated = false;
  config;

  constructor(config:ConfigService,
                private list: ListService) {
    this.config = config;
  }


  isLoggedIn():boolean {
    let session: User;
    let chDate = new Date();
    chDate.setDate(chDate.getDate() -7);
    if (!this.isAuthenticated){
      session = JSON.parse(window.localStorage.getItem('UserFS'));
      if (session && (Number(session.date) > chDate.getTime())){
        this.isAuthenticated = true;
      } else {
        console.warn('Session has expired');
      }
    }
    return this.isAuthenticated;
  }

  setData(data:User):void {
    window.localStorage.setItem('UserFS', JSON.stringify(data));
  }

  login(username:string, password:string):boolean {
    if ((this.config.login == username) && (this.config.password == password)) {
      let uuid = UUID.UUID();
      let session: User = {
        date: new Date().getTime(),
        uuid,
        login: username
      };
      this.setData(session);
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout(){
    this.isAuthenticated = false;
    window.localStorage.clear();
    this.list.removeAll();
  }
}
