import { Component } from '@angular/core';
import {NgForageConfig, NgForageOptions} from "@ngforage/ngforage-ng5";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(conf: NgForageConfig) {
    conf.name = 'myDB';
    conf.storeName = 'list';
    // Set default cache time to 5 minutes
    // conf.cacheTime = 300000;
    conf.driver = [
      NgForageConfig.DRIVER_INDEXEDDB,
      NgForageConfig.DRIVER_WEBSQL,
      NgForageConfig.DRIVER_LOCALSTORAGE
    ];
    conf.size = 1024 * 1024 * 4;
    const bulk: NgForageOptions = {
      version: 1.0,
      name: 'usersDb'
    };
    conf.configure(bulk);
    this.setMinyNavBar();
    window.addEventListener("resize", () => {
      this.setMinyNavBar()
    });
  }

  private setMinyNavBar(){
    let el = document.getElementById("body");
    if (el.clientWidth < 750) {
      if (!el.classList.contains("mini")){
        el.classList.add("mini");
      }
    } else if (el.classList.contains("mini")) {
      el.classList.remove("mini");
    }
  }

}
