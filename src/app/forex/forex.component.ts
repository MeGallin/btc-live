import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css'],
  providers: [HttpService]
})
export class ForexComponent implements OnInit {
  public fxData;
  public progress = 1;
  public loadingMessage = 'FX rate loading';


  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.getFxData();
    }, 60000 / 2);

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
      console.table(this.fxData);
    });
  }

}
