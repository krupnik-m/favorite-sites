import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit  {
  constructor ( private auth:AuthService,
                private router:Router) {
    if (!auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {

  }
}
