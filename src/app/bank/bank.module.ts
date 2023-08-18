import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from '@angular/flex-layout';

import { BankDashboardComponent } from './bank-dashboard/bank-dashboard.component';
import { AdvisoryTransactionComponent } from './advisory-transaction/advisory-transaction.component';
import { IssuingTransactionComponent } from './issuing-transaction/issuing-transaction.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoaderModule } from '../loader/loader.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LeiIssueComponent } from './lei-issue/lei-issue.component';
import { TransactionIssueComponent } from './transaction-issue/transaction-issue.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { HistoryComponent } from './history/history.component';
import { RolesComponent } from './roles/roles.component';
import { LoginfoComponent } from './loginfo/loginfo.component';

// LcviewComponent
@NgModule({
  declarations: [BankDashboardComponent, AdvisoryTransactionComponent, IssuingTransactionComponent, 
    AnalyticsComponent, LeiIssueComponent, TransactionIssueComponent, TransactionHistoryComponent, 
    HistoryComponent, RolesComponent,LoginfoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,LoaderModule
  ]
})
export class BankModule { }
