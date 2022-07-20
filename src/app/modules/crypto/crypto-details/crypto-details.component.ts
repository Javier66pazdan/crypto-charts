import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {CryptoService, HistoricalCryptoData} from "../../../core/services/crypto.service";

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent implements OnInit {

  cryptoId!: string;
  historicalData: HistoricalCryptoData[] = [];
  subscription!: Subscription;

  constructor(private cryptoService: CryptoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.cryptoId = (params.get('id') as string);
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.cryptoService.getSingleCryptoData(this.cryptoId).subscribe({
      next: (crypto) => {
        // console.log(crypto)
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.cryptoService.getHistoricalSingleCryptoData(this.cryptoId, 'd1').subscribe({
      next: (historicalData) => {
        this.historicalData = historicalData;
        console.log(this.historicalData)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
