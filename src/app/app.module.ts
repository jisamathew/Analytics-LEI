import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MaterialModule} from "./material/material.module";
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShlistDialogComponent } from './shlist-dialog/shlist-dialog.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BankModule } from './bank/bank.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ZXingScannerModule } from 'angular-weblineindia-qrcode-scanner';
import { LoaderModule } from './loader/loader.module';
import {HttpClient, HttpClientModule  } from '@angular/common/http';

import { NgxHorizontalTimelineModule } from 'ngx-horizontal-timeline';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    ShlistDialogComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ToolbarComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ShlistDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BankModule,
    MatInputModule,
    MatFormFieldModule,
    ZXingScannerModule,
    LoaderModule,
    HttpClientModule,
    NgxHorizontalTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
