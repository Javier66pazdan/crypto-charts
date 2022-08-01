import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CryptoComponent} from "./crypto.component";
import {CryptoDetailsComponent} from "./crypto-details/crypto-details.component";

const routes: Routes = [
  { path: '', component: CryptoComponent },
  { path: ':id', component: CryptoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }
