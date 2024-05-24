import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dumb-search-card',
  templateUrl: './dumb-search-card.component.html',
  styleUrl: './dumb-search-card.component.scss',
})
export class DumbSearchCardComponent {
  @Output() input: EventEmitter<string> = new EventEmitter();

  onGetInputChange = (event: any): void => {
    this.input.emit(event);
  };
}
