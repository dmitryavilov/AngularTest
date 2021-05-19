import { Injectable } from "@angular/core";

@Injectable()

export class CardService {
  actuallyId: number = 0;
  cards: Array<any> = [];
}
