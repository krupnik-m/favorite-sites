import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { ReportsComponent } from './reports/reports.component';
import {SetupsComponent} from "./setups/setups.component";
import {UsersComponent} from "./users/users.component";


const routes: Routes = [{
    path: '',
    component: SystemComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'setups',
        component: SetupsComponent
      }
    ]
}];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
