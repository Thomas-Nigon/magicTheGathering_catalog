import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CardsService } from '../../../../catalog/shared/cards.service';
import { Card } from '../../../../../models/card.model';
import { Catalog } from '../../../../catalog/models/catalog.model';

@Component({
  selector: 'app-smart-search-card',
  templateUrl: './smart-search-card.component.html',
  styleUrl: './smart-search-card.component.scss',
})
export class SmartSearchCardComponent {
  searchInput: string = '';
  searchCatalog!: string[];

  cardService = inject(CardsService);
  @Output() emittedCard: EventEmitter<Card> = new EventEmitter();

  onSearch = (event: any): void => {
    this.searchInput = event.target.value;
    this.cardService
      .getCardAutoComplete(this.searchInput)
      .subscribe((fetchedData) => {
        this.searchCatalog = fetchedData.data;
      });
  };
  onSelectCard = (cardName: string): void => {
    this.searchInput = cardName;
    this.cardService.prepareCardRequest(cardName);
    this.cardService.getSpecificCard().subscribe((fetchedData) => {
      this.emittedCard.emit(fetchedData);
    });
  };
}
