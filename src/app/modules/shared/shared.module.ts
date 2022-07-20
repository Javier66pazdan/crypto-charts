import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CryptoPercentPipe} from "./pipes/crypto-percent.pipe";
import { CryptoPricePipe } from './pipes/crypto-price.pipe';
import { VolumePipe } from './pipes/volume.pipe';

@NgModule({
  declarations: [
    CryptoPercentPipe,
    CryptoPricePipe,
    VolumePipe
  ],
  exports: [
    CryptoPercentPipe,
    CryptoPricePipe,
    VolumePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
