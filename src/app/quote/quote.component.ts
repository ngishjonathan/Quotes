import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Never give up in this life','its not good to give up',new Date (6,7,2018)),
    new Quote(2,'Remain calm it does not hurt','always be calm',new Date (6,7,2018)),
    new Quote(3, 'Never chase a Dream','remain focused',new Date (6,7,2018)),,
    new Quote(4, 'when the deal is too good think twice','think before doing anything',new Date (6,7,2018)),,
    new Quote(5, 'character makes a man','be a person of character',new Date (6,7,2018)),,
    new Quote(6, 'work hard today to avoid hardwork tommorrow','always be hardworking',new Date (6,7,2018)),,

]

  completeQuote(isComplete,index){
      if (isComplete){
          this.quotes.splice(index,1);
          }
         }
         addNewquote(quote){
          let quoteLength = this.quotes.length;
          quote.id=quoteLength+1;
          this.quotes.push(quote)
         }
         ngOnInit() {
        }
      }
      
        
