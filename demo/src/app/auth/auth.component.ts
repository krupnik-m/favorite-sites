import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import {AuthService} from "../shared/services/auth.service";


@Component({
  selector: 'app-autch',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private auth:AuthService,
               private router:Router) {
    if (auth.isLoggedIn()) {
      this.router.navigate(['/users']);
    }
  }

  ngOnInit() {
  }
}
