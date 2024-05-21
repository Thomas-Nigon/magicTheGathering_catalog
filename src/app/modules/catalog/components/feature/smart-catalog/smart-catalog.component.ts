import { Component, inject } from '@angular/core';
import { Card } from '../../../models/card.model';
import { Color } from '../../../models/color.model';
import { CardsService } from '../../../shared/cards.service';

@Component({
  selector: 'app-smart-catalog',
  templateUrl: './smart-catalog.component.html',
  styleUrl: './smart-catalog.component.scss',
})
export class SmartCatalogComponent {
  cardList: Card[] = [];
  filteredCardList: Card[] = [];
  cardColors: Color[] = [];
  cardTypes: string[] = [];
  selectedColor: string = 'W';
  private cardService = inject(CardsService);
  ngOnInit(): void {
    this.cardService.getAllResults().subscribe((fetchedData) => {
      console.log(fetchedData);
      this.cardList = fetchedData;
      this.filteredCardList = this.cardList;
      console.log('mes cartes', this.cardList);
      getColorArray();
      getCardType();
    });

    /* const getColors = (): void => {
      this.cardList.map((card: any) => {
        this.uniqueColors.includes(card.color_identity.toString())
          ? ''
          : this.uniqueColors.push(card.color_identity.toString());
      });
      console.log('cardColors:', this.uniqueColors);
    }; */

    const getCardType = (): void => {
      this.cardList.map((card: any) => {
        this.cardTypes.includes(card.type_line)
          ? ''
          : this.cardTypes.push(card.type_line);
      });
      console.log('cardTypes:', this.cardTypes);
    };

    const getColorArray = (): void => {
      this.cardService.getColorArray().subscribe((fetchedData) => {
        this.cardColors = fetchedData;
      });
    };
  }

  onGetFilterChange = (color: string): void => {
    this.selectedColor = color;
    console.log('I received a change!!, new color is:', color);

    console.log('new color will be:', this.selectedColor);
    this.filterCards();
  };
  filterCards = () => {
    this.filteredCardList = this.cardList.filter((card) => {
      return card.colors.includes(this.selectedColor);
    });
    console.log('my filteredcards:', this.filteredCardList);
  };
}
