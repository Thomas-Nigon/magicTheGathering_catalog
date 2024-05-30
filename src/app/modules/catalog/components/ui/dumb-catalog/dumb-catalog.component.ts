import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../models/card.model';
import { Color } from '../../../models/color.model';
import { Type } from '../../../models/type.model';

@Component({
  selector: 'app-dumb-catalog',
  templateUrl: './dumb-catalog.component.html',
  styleUrl: './dumb-catalog.component.scss',
})
export class DumbCatalogComponent {
  @Input() cardList: Card[] = [];
  @Input() filteredcardList: Card[] = [];
  @Input() uniqueColors: Color[] = [];
  @Input() typeSelector: Type[] = [];
  @Input() selectedColor: string = '';
  @Input() selectedType: string = '';
  @Input() isLoading!: boolean;

  @Output() typeChange: EventEmitter<string> = new EventEmitter();

  onTypeChange = (event: any): void => {
    const type = event.target as HTMLSelectElement;
    this.typeChange.emit((this.selectedType = type.value));
  };
}
