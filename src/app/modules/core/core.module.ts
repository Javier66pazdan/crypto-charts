import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../../material.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
