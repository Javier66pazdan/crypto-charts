import {Component, OnInit} from '@angular/core';
import {CryptoService} from "./core/services/crypto.service";
import {AutocompleteService} from "./core/services/autocomplete.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cryptoService: CryptoService, private autocompleteService: AutocompleteService) { }

  ngOnInit(): void {
    this.cryptoService.getCryptosData().subscribe({
      next: (cryptosData) => {
        this.autocompleteService.setInputOptions(cryptosData.data.map(crypto => {
          return {
            name: crypto.name,
            id: crypto.id
          }
        }));
      }
    })
  }
}
