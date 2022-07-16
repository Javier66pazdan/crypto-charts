import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarState = new BehaviorSubject('');
  sidebar = this.sidebarState.asObservable();

  constructor() { }

  toggleSidebar() {
    this.sidebarState.next('');
  }

}
