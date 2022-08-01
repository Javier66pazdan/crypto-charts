import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Crypto, CryptoService} from "../../core/services/crypto.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {interval, Subscription, timer} from "rxjs";
import {switchMap} from "rxjs/operators";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['rank', 'name', 'priceUsd', 'changePercent24Hr', '24hVolume' ,'links'];
  cryptosData: Crypto[] = [];
  tableData = new MatTableDataSource<Crypto>([]);
  subscription!: Subscription;
  errMessage: string | boolean = false;

  constructor(private cryptoService: CryptoService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    // auto update data every 30 secs
    this.subscription = timer(0, 30000).
    pipe(switchMap(() => this.cryptoService.getCryptosData())).
    subscribe({
      next: (cryptosData) => {
        this.errMessage = false;
        this.tableData = new MatTableDataSource(cryptosData.data);
        this.cryptosData = cryptosData.data;
        this.tableData.sort = this.sort;
        this.tableData.paginator = this.paginator;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  ngAfterViewInit() {
    // this.tableData.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
