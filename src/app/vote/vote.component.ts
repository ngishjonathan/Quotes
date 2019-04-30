import { Component, OnInit, Input } from '@angular/core';
import{  Quote } from '../quote'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() quote:Quote;
  likes :number=0;
  dislikes :number=0;

  likeBtn(){
    this.likes++;
  }
  dislikeBtn(){
    this.dislikes++;
  }

  constructor() { }

  ngOnInit() {
  }

}
