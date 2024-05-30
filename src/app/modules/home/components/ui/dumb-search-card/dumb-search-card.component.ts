import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dumb-search-card',
  templateUrl: './dumb-search-card.component.html',
  styleUrl: './dumb-search-card.component.scss',
})
export class DumbSearchCardComponent {
  @Input() searchCatalog: string[] = [];
  @Input() searchInput: string = '';
  isHidden!: boolean;
  @Output() input: EventEmitter<string> = new EventEmitter();
  @Output() selectCard: EventEmitter<string> = new EventEmitter();

  onGetInputChange = (event: any): void => {
    this.input.emit(event);
  };
  onSelectCard = (cardName: string): void => {
    this.selectCard.emit(cardName);
    this.isHidden = true;
  };

  onFocus(): void {
    console.log('focus');
    this.isHidden = false;
  }
  onBlur(): void {
    console.log('blur');
    this.isHidden = true;
  }
}
