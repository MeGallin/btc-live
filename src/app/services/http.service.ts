import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {}

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append(
      'Authorization',
      'Basic bXlfYXBpX2tleTo=' + 'YJo3kz4MQMJjT9yf0SnjoP-9mpGcTbSTP7xw0q5n'
    );
  }

  get(url) {
    let headers = new HttpHeaders().set(
      'Authorization',
      'YJo3kz4MQMJjT9yf0SnjoP-9mpGcTbSTP7xw0q5n' + ':'
    );
    this.createAuthorizationHeader(headers);
    return this._http
      .get(url, { headers: headers })
      .retry(5)
      .do(res => {
        console.log(res);
        JSON.stringify(res);
      });
  }

  fetchMultipleData(): Observable<any> {
    const compUrl = 'https://api.companieshouse.gov.uk/company/06400321';
    const url =
      'https://forex.1forge.com/1.0.2/quotes?pairs=EURUSD,GBPUSD,AUDUSD,USDZAR&api_key=DkqaFF8lHBifwKZKxRkV3ZF0YFJvz40g';
    const trueFx =
      'http://webrates.truefx.com/rates/connect.html?f=html&c=EUR/USD%20(http://webrates.truefx.com/rates/connect.html?id=gallin20400:leftas159:eurrates:1513088800518&c=AUD/USD,USD/JPY,EUR/';
    // https://www.freeforexapi.com/Home/Api
    const freeforexapi =
      'https://www.freeforexapi.com/api/live?pairs=EURUSD,GBPUSD';

    let headers = new HttpHeaders().set(
      'Authorization',
      'Basic WUpvM2t6NE1RTUpqVDl5ZjBTbmpvUC05bXBHY1RiU1RQN3h3MHE1bjo='
    );
    // .set('scheme', 'https')
    // .set('accept', 'text/plain, */*; q=0.01')
    // .set('Access-Control-Allow-Origin', '*')
    // .set(
    //   'Access-Control-Allow-Headers',
    //   'Origin, X-Requested-With, Content-Type, Accept'
    // )
    // .set('content-type', 'application/json')
    // .set('content-type', 'application/json');

    // this.createAuthorizationHeader(headers);

    return this._http
      .get(url, { headers: headers })
      .retry(5)
      .do(res => {
        console.log(res);
        JSON.stringify(res);
      })
      .catch((error: any) => Observable.throw(error || 'Http service error'));
  }

  fetchBitCoin(): Observable<any> {
    const urlOne = 'https://api.gdax.com/products/BTC-USD/ticker';

    return this._http
      .get(urlOne)
      .retry(5)
      .do(res => {
        JSON.stringify(res);
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Http service error')
      );
  }

  fetchEthCoin(): Observable<any> {
    const urlOne = 'https://api.gdax.com/products/ETH-USD/ticker';

    return this._http
      .get(urlOne)
      .retry(5)
      .do(res => {
        JSON.stringify(res);
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Http service error')
      );
  }

  fetchLiteCoin() {
    const urlOne = 'https://api.gdax.com/products/LTC-USD/ticker';

    return this._http
      .get(urlOne)
      .retry(5)
      .do(res => {
        JSON.stringify(res);
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Http service error')
      );
  }
}

// https://api.coindesk.com/v1/bpi/currentprice.json
// https://api.bitfinex.com/v1/pubticker/btcusd
// https://api.bitfinex.com/v1/pubticker/ethusd
// https://api.gdax.com/products/BTC-USD/ticker
// https://api.gdax.com/products/ETH-USD/ticker
