import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import {DomSanitizer} from '@angular/platform-browser';


import {ListService} from "../shared/services/list.services";
import {Item} from "../shared/models/item.model";
import {Message} from "../../shared/models/message.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  form:FormGroup;
  patient:number = 1;
  isStateAdd:boolean = true;
  message:Message;
  usersList:Item[];
  curUser:Item;
  editUser:Item;
  isLoaded:boolean = false;

  constructor(private list:ListService, private sanitizer:DomSanitizer) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'username': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'address': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'ava': new FormControl(null, [])
    });
    this.getList();
  }

  private getList() {
    this.isLoaded = false;
    this.list.getData().then(res => {
      if (res.length) {
        this.usersList = res;
        if (!this.curUser) {
          this.curUser = JSON.parse(JSON.stringify(this.usersList[0]));
          this.editUser = JSON.parse(JSON.stringify(this.curUser));
        }
      }
      this.isLoaded = true;
      for (let i of this.usersList){
        if (i.file) {
          i.filepath = window.URL.createObjectURL(i.file);
        }
      }
    });
  }

  delUser(key:string) {
    this.list.removeUser(key);
    this.getList();
  }

  setCurrentUser(user:Item) {
    this.curUser = user;
  }

  onSubmit() {
    const formData = this.form.value;
    let itm:Item = {
      id: (this.isStateAdd) ? this.getId() : this.editUser.id,
      username: String(formData.username),
      email: String(formData.email),
      address: String(formData.address),
      file: this.editUser.file,
      filepath: this.editUser.filepath,
      phone: String(formData.phone),
      sites: (this.isStateAdd) ? ['https://www.google.com/'] : this.editUser.sites
    }
    if (this.isStateAdd) {
      this.list.addUser(itm.id, itm);
    } else {
      this.list.removeUser(itm.id);
      this.list.addUser(itm.id, itm);
    }
    this.getList();
    this.curUser = itm;
  }

  emptyEditUser(state:boolean, item:Item) {
    this.isStateAdd = state;

    if (this.isStateAdd) {
      this.form.reset();
      this.editUser = {
        id: null,
        username: null,
        email: null,
        phone: null,
        file: null,
        filepath: null,
        address: null,
        sites: []
      };
    } else {
      this.form.dirty;
      this.form.touched;
      this.editUser = JSON.parse(JSON.stringify(item));
      this.curUser = JSON.parse(JSON.stringify(item));
    }
  }


  sanitize(url:string){
    return (url)?this.sanitizer.bypassSecurityTrustUrl(url):null;
  }

  private getId():string {
    return (this.usersList.length) ? String(this.usersList[this.usersList.length - 1].id + 1) : '0';
  }

  onChange(event, form) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.editUser.file = fileList[0];
      this.editUser.filepath = window.URL.createObjectURL(this.editUser.file);
    }
  }

}

