import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.sass']
})

export class CardPageComponent{
  cardId: any;
  card: any;

  constructor(private activatedRoute: ActivatedRoute, private cardService: CardService) {
    let cardId: any = this.activatedRoute.snapshot.paramMap.get('id');
    // Получение ID текущей записи
    this.cardId = cardId;

    const getCard = () => {
      this.cardService.cards.forEach((item):void => {
        if (item.id == this.cardId) {
          this.card = item;
        }
      });
      //Получение текущей карточки из сервиса
    };

    getCard();
  };

  deleteCard() {
    this.cardService.cards.forEach((item, key):void => {
      if (item.id == this.cardId) {
        delete this.cardService.cards[key];

        this.cardService.cards = this.cardService.cards.filter(x => x !== null);
      };
    });
    //Получение по ID и удаление карточки
  };

  editCard() {
    this.cardService.cards.forEach((item, key):void => {
      if (item.id == this.cardId) {
        item.title = this.card.title;
        item.content = this.card.content;
      };
    });
    //Получение по ID и присваивание новых значений карточке

    alert('Изменения успешно сохранены!');
  };

  toggleModal() {
    const modal: any = document.getElementById('delete-modal'),
          overlay: any = document.getElementById('overlay');

    if (modal.matches('.delete-modal--active')) {
      modal.classList.remove('delete-modal--active');
      overlay.style.display = "none";

      return;
    };
    //Проверка условия "Активно ли модальное окно?"

    modal.classList.add('delete-modal--active');
    overlay.style.display = "block";
  };
}
