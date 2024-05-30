import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Color } from '../models/color.model';
import { Observable, expand, reduce } from 'rxjs';
import { Card } from '../models/card.model';
import { Type } from '../models/type.model';
import { scryApiResponse } from '../models/scryApiResponse.model';
import { Catalog } from '../models/catalog.model';

const apiUrl: string =
  'https://api.scryfall.com/cards/search?include_extras=false&include_variations=false&order=set&q=e%3A7ed&unique=prints';
@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private http = inject(HttpClient);
  formattedName!: string;

  constructor() {}
  getRandomCard(): Observable<Card> {
    return this.http.get<Card>('https://api.scryfall.com/cards/random');
  }
  getCardsFromscryfall(): Observable<scryApiResponse> {
    return this.http.get<scryApiResponse>(
      'https://api.scryfall.com/cards/search?include_extras=false&include_variations=false&order=set&q=e%3A7ed&unique=prints'
    );
  }
  getAllResults() {
    return this.http.get<scryApiResponse>(apiUrl).pipe(
      expand((res) => (res.next_page ? this.http.get(res.next_page) : '')),
      reduce((acc, res: any) => acc.concat(res.data), [])
    );
  }
  getColorArray(): Observable<Color[]> {
    return this.http.get<Color[]>('assets/colorSelector.json');
  }
  getTypeArray(): Observable<Type[]> {
    return this.http.get<Type[]>('assets/typeSelector.json');
  }

  getCardAutoComplete(text: string) {
    return this.http.get<Catalog>(
      `https://api.scryfall.com/cards/autocomplete?q=${text}`
    );
  }

  prepareCardRequest(cardName: string) {
    const words = cardName.split(' ');
    if (words.length === 1) {
      return (this.formattedName = words[0]);
    } else {
      return (this.formattedName = words
        .map((word) => word.substring(0, 4))
        .join('+'));
    }
  }
  getSpecificCard(): Observable<Card> {
    return this.http.get<Card>(
      `https://api.scryfall.com/cards/named?fuzzy='${this.formattedName}`
    );
  }
}
