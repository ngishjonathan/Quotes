import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
        new Quote(1,'Never give up in this life','its not good to give up'),
        new Quote(2,'Remain calm it does not hurt','always be calm'),
        new Quote(3, 'Never chase a Dream','remain focused'),
        new Quote(4, 'when the deal is too good think twice','think before doing anything'),
        new Quote(5, 'character makes a man','be a person of character'),
        new Quote(6, 'work hard today to avoid hardwork tommorrow','always be hardworking'),

    ]
}