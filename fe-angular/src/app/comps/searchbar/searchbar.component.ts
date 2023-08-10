import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class SearchbarComponent {
  @Output() searchQuery = new EventEmitter<string>();

  handleSearchChange(event: any) {
    this.searchQuery.emit(event.target.value);
  }
};