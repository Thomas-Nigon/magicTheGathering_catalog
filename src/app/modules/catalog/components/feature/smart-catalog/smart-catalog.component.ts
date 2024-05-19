import { Component, inject } from '@angular/core';
import { Card } from '../../../models/card.model';
import { CardsService } from '../../../shared/cards.service';

@Component({
  selector: 'app-smart-catalog',
  templateUrl: './smart-catalog.component.html',
  styleUrl: './smart-catalog.component.scss',
})
export class SmartCatalogComponent {
  cardList: Card[] = [];
  private cardService = inject(CardsService);
  ngOnInit(): void {
    this.cardService.getCards().subscribe({
      next: (data) => {
        this.cardList = data.cards;
        console.log('fetched cards:', this.cardList);
      },
      error: (err) => {
        console.error('Error fetching cards:', err);
      },
    });
  }
}
