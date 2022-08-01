import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterModule} from "@angular/router";
import { ModalComponent } from './modal/modal.component';
import {SharedModule} from "../shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CryptoLoadingInterceptor} from "./errors/crypto-loading.interceptor";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ModalComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CryptoLoadingInterceptor,
      multi: true
    }
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ModalComponent
  ]
})
export class CoreModule { }
