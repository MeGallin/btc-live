import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-lite-coin',
  templateUrl: './lite-coin.component.html',
  styleUrls: ['./lite-coin.component.css'],
  providers: [HttpService]
})
export class LiteCoinComponent implements OnInit {
  public liteCoin;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.getLiteCoinData();
    }, 60000 / 60);
  }

  getLiteCoinData() {
    this.httpService.fetchLiteCoin().subscribe(data => {
      this.liteCoin = data;
      this.liteCoin = new Array(this.liteCoin);
    });
  }
}
