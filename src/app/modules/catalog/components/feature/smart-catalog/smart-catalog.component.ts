import { Component, inject } from '@angular/core';
import { Card } from '../../../models/card.model';
import { Color } from '../../../models/color.model';
import { Type } from '../../../models/type.model';
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
  cardTypes: Type[] = [];
  selectedColor: string = '';
  selectedType: string = '';
  private cardService = inject(CardsService);
  ngOnInit(): void {
    this.cardService.getAllResults().subscribe((fetchedData) => {
      console.log(fetchedData);
      this.cardList = fetchedData;
      this.filteredCardList = this.cardList;
      console.log('mes cartes', this.cardList);
      getColorArray();
      getTypeArray();
    });
    const getColorArray = (): void => {
      this.cardService.getColorArray().subscribe((fetchedData) => {
        this.cardColors = fetchedData;
      });
    };
    const getTypeArray = (): void => {
      this.cardService.getTypeArray().subscribe((fetchedData) => {
        this.cardTypes = fetchedData;
        console.log(this.cardTypes);
      });
    };
  }

  onGetTypeChange = (type: string): void => {
    this.selectedType = type;
    console.log('I received a change!!, new type is:', type);

    console.log('new type will be:', this.selectedType);
    this.filterCardsByType();
  };

  filterCardsByType = () => {
    this.selectedType === 'all'
      ? (this.filteredCardList = this.cardList)
      : (this.filteredCardList = this.cardList.filter((card) => {
          return card.type_line.includes(this.selectedType);
        }));
    console.log('my filteredcards:', this.filteredCardList);
  };
}

/*  onGetColorChange = (color: string): void => {
    this.selectedColor = color;
    console.log('I received a change!!, new color is:', color);

    console.log('new color will be:', this.selectedColor);
    this.filterCardsByColor();
  };
  filterCardsByColor = () => {
    this.selectedColor === 'all'
      ? (this.filteredCardList = this.cardList)
      : (this.filteredCardList = this.cardList.filter((card) => {
          return card.colors.includes(this.selectedColor);
        }));
    console.log('my filteredcards:', this.filteredCardList);
    console.log('entering second layer of filter');
  }; */

/* const getColors = (): void => {
      this.cardList.map((card: any) => {
        this.uniqueColors.includes(card.color_identity.toString())
          ? ''
          : this.uniqueColors.push(card.color_identity.toString());
      });
      console.log('cardColors:', this.uniqueColors);
    }; */

/*   const getCardType = (): void => {
      this.cardList.map((card: any) => {
        this.cardTypes.includes(card.type_line)
          ? ''
          : this.cardTypes.push(card.type_line);
      });
      console.log('cardTypes:', this.cardTypes);
    }; */
