import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {SidebarService} from "../../../core/services/sidebar.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  opened!: boolean;
  subscription!: Subscription;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.subscription = this.sidebarService.sidebar.subscribe({
      next: () => {
        this.sidenav.toggle();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
