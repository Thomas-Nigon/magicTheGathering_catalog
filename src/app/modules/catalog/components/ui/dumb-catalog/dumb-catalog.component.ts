import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../models/card.model';
import { Color } from '../../../models/color.model';

@Component({
  selector: 'app-dumb-catalog',
  templateUrl: './dumb-catalog.component.html',
  styleUrl: './dumb-catalog.component.scss',
})
export class DumbCatalogComponent {
  @Input() cardList: Card[] = [];
  @Input() filteredcardList: Card[] = [];
  @Input() uniqueColors: Color[] = [];
  @Input() selectedColor: string = '';
  @Output() filterChange: EventEmitter<string> = new EventEmitter();

  onFilterChange = (event: any): void => {
    const color = event.target as HTMLSelectElement;
    console.log('inside onFilterChange:', this.selectedColor);
    this.filterChange.emit((this.selectedColor = color.value));
  };
}
