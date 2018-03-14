///<reference path="auth/auth.module.ts"/>
import { NavbarComponent } from './../../../src/navbars/navbar.component';
import { NavbarService } from './../../../src/navbars/navbar.service';
import { LogoComponent } from './../../../src/navbars/logo.component';
import { LinksComponent } from './../../../src/navbars/links.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from '../../../src';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';// old for angular 4
import {TranslateModule} from '@ngx-translate/core';
import {NgForageModule} from "@ngforage/ngforage-ng5";


import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.modules";
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
import {SystemModule} from "./system/system.module";
import {ConfigService} from "./shared/services/config.services";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SystemModule,
    HttpClientModule,
    HttpModule,
    NgForageModule,
    TranslateModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    NavbarService,
    HttpClientModule,
    AuthService,
    ConfigService,
    UsersService
  ],
  bootstrap: [AppComponent],
  exports: [NavbarComponent,
    LinksComponent,
    LogoComponent],
})
export class AppModule {
}
