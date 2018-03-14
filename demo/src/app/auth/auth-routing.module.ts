import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth.component";
import {ForgotComponent} from "./forgot/forgot.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'forgot',
        component: ForgotComponent,
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
