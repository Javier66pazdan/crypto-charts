import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Crypto {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface HistoricalCryptoData {
  priceUsd: string;
  time: Date;
}

export interface HistoricalCrypto {
  data: HistoricalCryptoData[];
}

interface AllCryptoResponse {
  data: Crypto[];
}

interface SingleCryptoResponse {
  data: Crypto;
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private httpClient: HttpClient) {}

  getCryptosData(): Observable<AllCryptoResponse> {
    return this.httpClient.get<AllCryptoResponse>('https://api.coincap.io/v2/assets');
  }

  getSingleCryptoData(id: string): Observable<SingleCryptoResponse> {
    return this.httpClient.get<SingleCryptoResponse>('https://api.coincap.io/v2/assets/' + id);
  }

  getHistoricalSingleCryptoData(id: string, interval: string): Observable<HistoricalCryptoData[]> {
    return this.httpClient.get<HistoricalCrypto>('https://api.coincap.io/v2/assets/' + id + '/history', {
      params: {
        interval
      }
    }).pipe(
      map(data => {
        return data.data.map(historicalData => {
          return {
            priceUsd: historicalData.priceUsd,
            time: new Date(historicalData.time)
          };
        })
      })
    );
  }
}
