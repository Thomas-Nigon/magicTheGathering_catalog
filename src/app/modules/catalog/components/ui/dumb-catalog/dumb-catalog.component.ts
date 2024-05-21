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

  @Output() typeChange: EventEmitter<string> = new EventEmitter();
  /*   @Output() colorChange: EventEmitter<string> = new EventEmitter();
   */
  onTypeChange = (event: any): void => {
    const type = event.target as HTMLSelectElement;
    console.log('inside onTypeChange:', this.selectedType);
    this.typeChange.emit((this.selectedType = type.value));
    console.log('selectedType after event:', this.selectedType);
  };

  /* onColorChange = (event: any): void => {
    console.log('entering onColorChange');
    console.log('event:', event);
    const color = event.target as HTMLSelectElement;
    console.log('inside onColorChange:', this.selectedColor);
    this.colorChange.emit((this.selectedColor = color.value));
  }; */
}
