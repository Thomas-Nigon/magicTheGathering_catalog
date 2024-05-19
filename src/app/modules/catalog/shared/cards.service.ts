import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private http = inject(HttpClient);
  constructor() {}
  getCards(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      'https://api.magicthegathering.io/v1/cards'
    );
  }
}
