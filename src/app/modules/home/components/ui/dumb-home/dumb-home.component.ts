import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../../catalog/models/card.model';

@Component({
  selector: 'app-dumb-home',
  templateUrl: './dumb-home.component.html',
  styleUrl: './dumb-home.component.scss',
})
export class DumbHomeComponent {
  @Input() myCard: Card = {} as Card;
  @Output() submit = new EventEmitter();
  searchedCard!: Card;

  onGetclick(): void {
    this.submit.emit();
  }
  onGetCard(card: Card): void {
    this.searchedCard = card;
  }
}
