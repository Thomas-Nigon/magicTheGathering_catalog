import { Component, Input } from '@angular/core';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-dumb-catalog',
  templateUrl: './dumb-catalog.component.html',
  styleUrl: './dumb-catalog.component.scss',
})
export class DumbCatalogComponent {
  @Input() cardList: Card[] = [];
}
