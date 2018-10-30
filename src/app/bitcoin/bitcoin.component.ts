import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css'],
  providers: [HttpService]
})
export class BitcoinComponent implements OnInit {
  public data;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    setInterval(() => {
      this.getBitCoinData();
    }, 60000 / 60);
  }

  getBitCoinData() {
    this.httpService.fetchBitCoin().subscribe(data => {
      this.data = data;
      this.data = new Array(this.data);
    });
  }

}
