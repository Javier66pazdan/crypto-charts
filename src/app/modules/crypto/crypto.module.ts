import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoComponent } from './crypto.component';
import { SingleCryptoComponent } from './single-crypto/single-crypto.component';
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../../../material.module";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    CryptoComponent,
    SingleCryptoComponent
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
