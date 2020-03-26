import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ForexComponent } from './forex/forex.component';
import { FooterComponent } from './footer/footer.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { LiteCoinComponent } from './lite-coin/lite-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ForexComponent,
    FooterComponent,
    BitcoinComponent,
    EthereumComponent,
    LiteCoinComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
