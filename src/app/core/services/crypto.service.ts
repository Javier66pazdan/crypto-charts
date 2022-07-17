import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Crypto {
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

interface HistoricalCrypto {
  priceUsd: string;
  time: number;
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private httpClient: HttpClient) {}

  getCryptosData(): Observable<Crypto[]> {
    return this.httpClient.get<Crypto[]>('api.coincap.io/v2/assets');
  }

  getSingleCryptoData(id: string): Observable<Crypto> {
    return this.httpClient.get<Crypto>('api.coincap.io/v2/assets/' + id);
  }

  getHistoricalSingleCryptoData(id: string): Observable<HistoricalCrypto[]> {
    return this.httpClient.get<HistoricalCrypto[]>('api.coincap.io/v2/assets/' + id + '/history');
  }
}
