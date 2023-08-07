import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoteCardComponent } from 'src/app/note-card/note-card.component';
import { SearchbarComponent } from 'src/app/searchbar/searchbar.component';
import { Note } from 'src/app/shared/note.model';
import { NotesHttpService } from 'src/app/shared/notes.service';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  standalone: true,
  imports: [SearchbarComponent, NoteCardComponent, RouterLink]
})
export class NotesListComponent {
  notes: object[] = [];

  constructor(private httpService: NotesHttpService) {}

  ngOnInit() {}

  getAllNotes = () => {
    this.httpService.getNotes().subscribe(
      (response: Object) => { 
        this.notes = JSON.parse(JSON.stringify(response)).map(
          (note: any) => note)
      },
      (error) => { console.log(error); }
    );
  }
}
