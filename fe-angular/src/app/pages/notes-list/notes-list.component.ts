import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoteCardComponent } from 'src/app/note-card/note-card.component';
import { SearchbarComponent } from 'src/app/searchbar/searchbar.component';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  standalone: true,
  imports: [SearchbarComponent, NoteCardComponent, RouterLink]
})
export class NotesListComponent {

}
