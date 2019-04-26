import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   Quotes: string[];

  constructor(){

    this.Quotes = ["Never give up in this life","Always keep calm it doesn't hurt",
    "whatever is started must be finished"];
  }
}