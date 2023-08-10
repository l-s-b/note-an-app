import { Component } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesHttpService } from 'src/app/shared/notes.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NoteListPage {
  notes!: Note[];

  constructor(private httpService: NotesHttpService) {}

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes = () => {
    this.httpService.getNotes().subscribe(
      (response: Object) => { 
        this.notes = JSON.parse(JSON.stringify(response)).map(
          (note: any) => note
        )
      },
      (error) => { console.log(error); }
    );
  }

  handleNoteDeletion(deletedNoteId: number) {
    this.notes = this.notes.filter(note => note.id !== deletedNoteId);
  }
}
