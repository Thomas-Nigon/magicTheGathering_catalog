import { Component } from '@angular/core';

@Component({
  selector: 'app-smart-search-card',
  templateUrl: './smart-search-card.component.html',
  styleUrl: './smart-search-card.component.scss',
})
export class SmartSearchCardComponent {
  searchInput: string = '';
  onSearch = (event: any): void => {
    this.searchInput = event.target.value;
    console.log('fetching input:', this.searchInput);
  };
}
