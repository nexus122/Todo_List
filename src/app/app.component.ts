import { Component } from '@angular/core';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public cardService: CardsService){}
  Hidden: boolean = false;
  texto: string = "";

  changeStatus(){    
    this.Hidden = !this.Hidden;
  }  

  obtenerValor() {
    this.cardService.addCard(this.texto);
    this.texto = "";
  }
}
