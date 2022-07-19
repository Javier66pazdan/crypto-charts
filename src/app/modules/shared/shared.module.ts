import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../../material.module";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {CryptoPercentPipe} from './pipes/crypto-procentage.pipe';
import { CryptoPricePipe } from './pipes/crypto-price.pipe';
import { VolumePipe } from './pipes/volume.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    CryptoPercentPipe,
    CryptoPricePipe,
    VolumePipe
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    CryptoPercentPipe,
    CryptoPricePipe,
    VolumePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule { }
