import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvisoryTransactionComponent } from './bank/advisory-transaction/advisory-transaction.component';
import { BankDashboardComponent } from './bank/bank-dashboard/bank-dashboard.component';
import { IssuingTransactionComponent } from './bank/issuing-transaction/issuing-transaction.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AnalyticsComponent } from './bank/analytics/analytics.component';
import { LeiIssueComponent } from './bank/lei-issue/lei-issue.component';
import { TransactionIssueComponent } from './bank/transaction-issue/transaction-issue.component';
import { TransactionHistoryComponent } from './bank/transaction-history/transaction-history.component';
import { HistoryComponent } from './bank/history/history.component';
import { RolesComponent } from './bank/roles/roles.component';


const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'user/login', component:UserLoginComponent},
  {path:'user/register', component:UserRegisterComponent},
  { path:'bank_dashboard',component:BankDashboardComponent},//just for demo routing page
  { path:'bank_dashboard/:id',component:BankDashboardComponent},//just for demo routing page
  { path:'issuing_transaction',component:IssuingTransactionComponent},//just for demo routing page
  { path:'advisory_transaction',component:AdvisoryTransactionComponent},//just for demo routing page
  // { path:'lcview',component:LcviewComponent},//just for demo routing page
  { path:'analytics',component:AnalyticsComponent},
  { path:'lei_issue',component:LeiIssueComponent},
  { path:'tranasaction_issue',component:TransactionIssueComponent},
  { path:'transaction_history',component:TransactionHistoryComponent},
  
  { path:'history/:id',component:HistoryComponent},
  { path:'roles',component:RolesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
