import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private localstorage: LocalstorageService) {     
    this.Cards = localstorage.GetParse("Cards") ?? [];
  }
  Cards:Array<any>=[]
  
  addCard(CardName:string){
    this.Cards.push({id: Date.now(),CardName: CardName, Checked: false});
    this.localstorage.Set("Cards", JSON.stringify(this.Cards));
  }
  removeCard(id: string){    
    this.Cards = this.Cards.filter(card => card.id != id);
    this.localstorage.Set("Cards", JSON.stringify(this.Cards));
  }
  checkCard(id: string){    
    this.Cards = this.Cards.map(card => {      
      if(card.id == id) card.Checked = !card.Checked
      return card;
    })
    this.localstorage.Set("Cards", JSON.stringify(this.Cards));
  }
}
