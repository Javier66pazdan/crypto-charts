import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../../core/services/sidebar.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {AutocompleteData, AutocompleteService} from "../../../core/services/autocomplete.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myControl = new FormControl('');
  options!: string[];
  autocompleteData: AutocompleteData[] = [];
  filteredOptions!: Observable<string[]>;
  isModalOpen = false;

  constructor(private sidebarService: SidebarService, private autocompleteService: AutocompleteService, private router: Router) { }

  ngOnInit(): void {
    this.autocompleteService.getInputOptions().subscribe({
      next: (options: AutocompleteData[]) => {
        this.autocompleteData = options;
        this.options = options.map(option => option.name);
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value|| ''))
        );
      },
      error: (err) => {

      }
    });
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.options.filter(option => this._normalizeValue(option).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  navigateToCrypto() {
    const crypto = this.autocompleteData.find(crypto => crypto.name === this.myControl.value);
    if(crypto) {
      this.router.navigate(['/crypto-list', crypto.id]);
    } else {
      this.isModalOpen = true;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
