import { Component, Input, OnInit } from '@angular/core';
import { cardModel } from 'src/app/services/cardModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() card!: cardModel;

  constructor(private cardService: CardsService) { 
    console.log(this.card);
  }

  removeCard(){
    this.cardService.removeCard(this.card.id);
  }

  checkCard(){
    this.cardService.checkCard(this.card.id);
  }

  ngOnInit(): void {
  }

}
