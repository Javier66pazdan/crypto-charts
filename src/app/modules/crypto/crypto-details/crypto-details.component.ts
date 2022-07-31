import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {CryptoService, HistoricalCryptoData} from "../../../core/services/crypto.service";
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_stock from 'highcharts/modules/stock';
HC_exporting(Highcharts);
HC_stock(Highcharts);

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent implements OnInit {

  cryptoId!: string;
  cryptoName!: string;
  historicalData: HistoricalCryptoData[] = [];
  subscription!: Subscription;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

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
        this.cryptoName = crypto.data.name;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.cryptoService.getHistoricalSingleCryptoData(this.cryptoId, 'd1').subscribe({
      next: (historicalData) => {
        this.historicalData = historicalData;
        this.chartOptions = {
          title: {
            text: `${this.cryptoName} Prices`
          },
          yAxis: {
            title: {
              text: 'Price (USD)'
            }
          },
          xAxis: {
            title: {
              text: 'Date'
            },
            type: 'datetime',
            dateTimeLabelFormats: {
              day: '%b %y'
            }
          },
          series: [{
            data: this.historicalData.map(data => {
              return {
                x: Date.UTC(data.year, data.month, data.day),
                y: Number(data.priceUsd)
              }
              // [Date.UTC(data.year, data.month, data.day), Number(data.priceUsd)];
            }),
            type: 'line'
          }],
          exporting: {
            enabled: true
          }
        };
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
