import { Component, OnInit, Output, Input } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  cards: Array<any> = [];
  id: number | undefined;

  constructor(private cardService: CardService) {}
  //Соединяемся с сервисом

  ngOnInit(): void {
    this.cards = this.cardService.cards;
  }

  toggleModal() {
    const modal: any = document.getElementById('create-modal'),
          overlay: any = document.getElementById('overlay');

    if (modal.matches('.create-modal--active')) {
      modal.classList.remove('create-modal--active');
      overlay.style.display = "none";

      return;
    };

    //Проверяет условие "Активно ли сейчас модальное окно?"

    modal.classList.add('create-modal--active');
    overlay.style.display = "block";
  }

  addProduct() {
    const title: any = document.getElementById('title'),
          modal: any = document.getElementById('create-modal'),
          overlay: any = document.getElementById('overlay'),
          content: any = document.getElementById('content');

    const isValid = ():void => {
      if (title.value.trim().length >= 2 && content.value.trim().length >= 2) {
        title.style.borderColor = 'black';
        content.style.borderColor = 'black';

        title.value = '';
        content.value = '';

        return;
      };

      title.style.borderColor = 'red';
      content.style.borderColor = 'red';
    };

    //Функция проверки валидации 2-х полей

    const hideElements = ():void => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    };
        
    if (title.value.trim().length >= 2 && content.value.trim().length >= 2) {
      const card = {
        title: title.value,
        content: content.value,
        id: this.cardService.actuallyId 
      };
      //Будущий объект карточки
      
      this.cardService.actuallyId++;
      this.cardService.cards.push(card);

      isValid();
      //Проверка валидации
      hideElements();
      //Скрытие модального окна и overlay
      return;
    }

    isValid();
  }
}
