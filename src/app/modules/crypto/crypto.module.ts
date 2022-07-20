import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import {SharedModule} from "../shared/shared.module";
import { CryptoComponent } from './crypto.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import {MaterialModule} from "../../../material.module";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    CryptoComponent,
    CryptoDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CryptoRoutingModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class CryptoModule { }
