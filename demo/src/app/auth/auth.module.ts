import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from '../../../../src';

import {LoginComponent } from './login/login.component';
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../shared/shared.module";
import {ForgotComponent} from "./forgot/forgot.component";


@NgModule ({
  declarations: [
    LoginComponent,
    ForgotComponent,
    AuthComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AuthRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})

export class AuthModule {}
