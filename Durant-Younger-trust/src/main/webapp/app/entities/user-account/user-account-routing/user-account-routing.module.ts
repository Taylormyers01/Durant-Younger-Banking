import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAccountMainpageComponent} from '../user-account-mainpage/user-account-mainpage.component'
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import {BankAccountDetailComponent} from "../../bank-account/detail/bank-account-detail.component";
import {BankAccountRoutingResolveService} from "../../bank-account/route/bank-account-routing-resolve.service";
import {IndvAccountDetailComponent} from "../indv-account-detail/indv-account-detail.component";
import {IndvAccountRoutingResolveService} from "./indv-account-routing-resolve.service";
import {UserAccountNewComponent} from "../user-account-new/user-account-new.component";
import {UserTransferComponent} from "../user-transfer/user-transfer.component";
import {BankUserRoutingResolveService} from "../../bank-user/route/bank-user-routing-resolve.service";

const bankTransactionRoute: Routes = [
  {
    path: '',
    component: UserAccountMainpageComponent,
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: IndvAccountDetailComponent,
    resolve: {
      bankAccount: IndvAccountRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: UserAccountNewComponent,
    // resolve: {
    //   bankAccount: IndvAccountRoutingResolveService,
    // },
    canActivate: [UserRouteAccessService],
  },
  {// id is a variable ,
    path: ':id/transfer',
    component: UserTransferComponent,
    resolve: {
      bankUser: BankUserRoutingResolveService,
    },
    canActivate: [UserRouteAccessService],
  },




];

@NgModule({
  imports: [RouterModule.forChild(bankTransactionRoute)],
  exports: [RouterModule],
})
export class UserAccountRoutingModule {}
