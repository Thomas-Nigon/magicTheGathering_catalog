import { Component, Input, inject } from '@angular/core';
import { CardsService } from '../../../../catalog/shared/cards.service';
import { Card } from '../../../../../models/card.model';

@Component({
  selector: 'app-smart-home',
  templateUrl: './smart-home.component.html',
  styleUrl: './smart-home.component.scss',
})
export class SmartHomeComponent {
  private cardService = inject(CardsService);
  myRandomCard!: Card;
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.cardService.getRandomCard().subscribe((fetchedData) => {
      this.myRandomCard = fetchedData;
      this.loading = false;
    });
  }
  onClick(): void {
    this.cardService.getRandomCard().subscribe((fetchedData) => {
      this.myRandomCard = fetchedData;
    });
  }
}
