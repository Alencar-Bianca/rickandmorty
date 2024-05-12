import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(value: string) {
    this.searchEvent.emit(value);
  }
}