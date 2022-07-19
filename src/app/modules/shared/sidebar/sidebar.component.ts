import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {SidebarService} from "../../../core/services/sidebar.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit ,OnDestroy {
  opened!: boolean;
  subscription!: Subscription;
  isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.subscription = this.sidebarService.sidebar.subscribe({
      next: (value) => {
        this.isSidebarOpen = value;
      }
    });
  }
  ngAfterViewInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
