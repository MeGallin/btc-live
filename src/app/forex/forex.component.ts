import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css'],
  providers: [HttpService]
})
export class ForexComponent implements OnInit {
  public bidPrice;
  public askPrice;
  public lastPrice;
  public openPrice;
  public lowPrice;
  public highPrice;
  public volume;
  public timeStamp;
  public symbol = 'BTCUSD';

  public fxData;
  public progress = 1;
  public loadingMessage = 'FX rate loading';

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getSocketData();

    // setInterval(() => {
    // this.getFxData();
    // }, 60000 / 10);

    const loader = setInterval(() => {
      this.progress = this.progress + 3;
      if (this.progress >= 99) {
        clearInterval(loader);
      }
    }, 1000);
  }

  getFxData() {
    this.httpService.fetchMultipleData().subscribe(data => {
      this.fxData = data;
      // console.table(this.fxData);
    });
  }

  getSocketData() {
    // var socket = new WebSocket('wss://api2.poloniex.com');
    var socket = new WebSocket('wss://api.bequant.io/api/2/ws');

    socket.onopen = () => {
      console.log('your socket is now open');
      // socket.send(JSON.stringify({ command: 'subscribe', channel: '1003' }));
      socket.send(
        JSON.stringify({
          method: 'subscribeTicker',
          params: {
            symbol: this.symbol
          },
          id: 123
        })
      );
    };

    socket.onmessage = e => {
      let data = e.data;
      const ask = 'ask":"';
      const askLength = ask.length;

      const bid = 'bid":"';
      const bidLength = bid.length;

      const last = 'last":"';
      const lastLength = last.length;

      const open = 'open":"';
      const openLength = open.length;

      const low = 'low":"';
      const lowLength = low.length;

      const high = 'high":"';
      const highLength = high.length;

      const volume = 'volume":"';
      const volumeLength = volume.length;

      const symbol = 'symbol":"';
      const symbolLength = symbol.length;

      const timeStamp = 'timestamp":"';
      const timeStampLength = timeStamp.length;

      let askIndex = data.indexOf('ask') + askLength;
      let bidIndex = data.indexOf('bid') + bidLength;
      let lastIndex = data.indexOf('last') + lastLength;
      let openIndex = data.indexOf('open') + openLength;
      let lowIndex = data.indexOf('low') + lowLength;
      let highIndex = data.indexOf('high') + highLength;
      let volumeIndex = data.indexOf('volume') + volumeLength;
      let symbolIndex = data.indexOf('symbol') + symbolLength;
      let timeStampIndex = data.indexOf('timestamp') + timeStampLength;

      this.askPrice = data.slice(askIndex, askIndex + 7);
      this.bidPrice = data.slice(bidIndex, bidIndex + 7);
      this.lastPrice = data.slice(lastIndex, lastIndex + 7);
      this.openPrice = data.slice(openIndex, openIndex + 7);
      this.lowPrice = data.slice(lowIndex, lowIndex + 7);
      this.highPrice = data.slice(highIndex, highIndex + 7);
      this.volume = data.slice(volumeIndex, volumeIndex + 11);
      this.symbol = data.slice(symbolIndex, symbolIndex + 6);
      this.timeStamp = new Date(
        data.slice(timeStampIndex, timeStampIndex + 24)
      ).toLocaleTimeString();
    };
  }

  handleInputQuote(e) {
    this.symbol = e;
    this.getSocketData();
  }
}
