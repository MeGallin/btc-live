import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 public clock = Observable.interval(1000)
   .map(t => new Date());

  constructor() {
  }

  ngOnInit() {

  }

}
