import { Component, inject } from '@angular/core';
import { Card } from '../../../models/card.model';
import { CardsService } from '../../../shared/cards.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-smart-catalog',
  templateUrl: './smart-catalog.component.html',
  styleUrl: './smart-catalog.component.scss',
})
export class SmartCatalogComponent {
  cardList: Card[] = [];
  private cardService = inject(CardsService);
  ngOnInit(): void {
    this.cardService.getAllResults().subscribe((fetchedData) => {
      console.log(fetchedData);
      this.cardList = fetchedData;
      console.log('mes cartes', this.cardList);
    });
  }
}
