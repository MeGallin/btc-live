import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css'],
  providers: [HttpService]
})
export class EthereumComponent implements OnInit {
  public ethCoin;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    setInterval(() => {
      this.getEthCoinData();
    }, 60000 / 60);

  }

  getEthCoinData() {
    this.httpService.fetchEthCoin().subscribe(data => {
      this.ethCoin = data;
      this.ethCoin = new Array(this.ethCoin);
    });
  }

}
