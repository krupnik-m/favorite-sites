import {ChangeDetectionStrategy, Component} from "@angular/core";

import { Injectable } from '@angular/core'
import {UUID} from "angular2-uuid/index";
import {async} from "rxjs/scheduler/async";

@Injectable()
export class UsersService {
  private isAuthenticated = false;
  constructor() {}
}
