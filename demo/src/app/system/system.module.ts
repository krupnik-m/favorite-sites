///<reference path="../shared/shared.module.ts"/>
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { MDBBootstrapModule } from '../../../../src';


import {SharedModule} from "../shared/shared.module";
import {SystemRoutingModule} from "./system-routing.module";
import {UsersComponent} from "./users/users.component";
import {ReportsComponent} from "./reports/reports.component";
import {SystemComponent} from "./system.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {ToptitleComponent} from "./shared/components/toptitle/toptitle.component";
import {TopbarComponent} from "./shared/components/topbar/topbar.component";

import {SetupsComponent} from "./setups/setups.component";
import {PatientComponent} from "./users/patient/patient.component";
import {ListService} from "./shared/services/list.services";



@NgModule({
imports: [
  CommonModule,
  SharedModule,
  SystemRoutingModule,
  MDBBootstrapModule.forRoot()
],
  declarations: [
    UsersComponent,
    ReportsComponent,
    SystemComponent,
    SetupsComponent,
    SidebarComponent,
    TopbarComponent,
    ToptitleComponent,
    PatientComponent
  ],
  providers:[
    ListService
  ]
})

export class SystemModule{
}
