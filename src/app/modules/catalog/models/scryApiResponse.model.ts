import { Card } from './card.model';
export interface scryApiResponse {
  data: Card[];
  has_more: boolean;
  next_page: string;
  total_cards: number;
}
