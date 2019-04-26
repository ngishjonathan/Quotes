import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Never give up in this life'),
    new Quote(2,'Remain calm it does not hurt'),
    new Quote(3, 'Never chase a Dream'),
    new Quote(4, 'when the deal is too good think twice'),
    new Quote(5, 'character makes a man'),
    new Quote(6, 'work hard today to avoid hardwork tommorrow'),
    ]

  constructor() { }

  ngOnInit() {
  }
}
