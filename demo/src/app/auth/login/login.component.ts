import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user.model";
import {Message} from "../../shared/models/message.model";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  message:Message;

  constructor(private usersService:UsersService,
              private authService:AuthService,
              private router:Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    });
    this.message = new Message('danger', '');
  }

  private showMessage(text:string, type:string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const formData = this.form.value;
    if (this.authService.login(formData.login, formData.password)) {
      this.router.navigate(['/users']);
    } else {
      this.showMessage('Login or Password are not correct');
    }
  }

}
