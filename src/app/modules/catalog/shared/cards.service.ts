import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  Observable,
  concatMap,
  expand,
  filter,
  of,
  reduce,
  takeWhile,
} from 'rxjs';
import { ApiResponse } from '../models/apiResponse.model';
import { Card } from '../models/card.model';
import { scryApiResponse } from '../models/scryApiResponse.model';

const apiUrl: string =
  'https://api.scryfall.com/cards/search?include_extras=false&include_variations=false&order=set&q=e%3A7ed&unique=prints';
@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private http = inject(HttpClient);

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
}
