import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../../../shared/services/auth.service";



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor ( private auth:AuthService,
                private router:Router) {
  }

  ngOnInit() {
  }

  doLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);

  }
  minimalize(){
    let el = document.getElementById("body");
    if (el.classList.contains("mini")) {
      el.classList.remove("mini");


      if (!el.classList.contains("mini")){
        el.classList.add("mini");
      }
    } else if (el.classList.contains("mini")) {
      el.classList.remove("mini");
    }
  }
}
