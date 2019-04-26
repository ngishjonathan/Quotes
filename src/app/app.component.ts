import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> My Quotes </h1>
    <p> my quote is {{Quote}} </p>
  `
})
export class AppComponent {
  Quote = 'Never giveup in life';
}
