import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CryptoPercentPipe} from "./pipes/crypto-percent.pipe";
import { CryptoPricePipe } from './pipes/crypto-price.pipe';
import { VolumePipe } from './pipes/volume.pipe';
import {MaterialModule} from "../../../material.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CryptoPercentPipe,
    CryptoPricePipe,
    VolumePipe
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CryptoPercentPipe,
    CryptoPricePipe,
    VolumePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
