import { Component, Input, Output, OnInit, Renderer2, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesHttpService } from 'src/app/shared/notes.service';

@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class NoteCardComponent {

  constructor(
    private httpService: NotesHttpService,
    private router: Router
    ) {}

  @Input() note!: Note;
  @Output() noteDeleted = new EventEmitter<number>();

  deleteNote(event: Event) {
    event.stopPropagation(); // Prevent redirection to Note detail!
    const { id } = this.note;
    alert('You are about to delete Note No. ' + id);
    this.httpService.deleteNote(id).subscribe(
      () => { this.noteDeleted.emit(id) },
      (error) => { console.log('Note deletion failure:\n' + JSON.stringify(error)); }
    );
    this.router.navigate(['/'])
  }

  editNote(event: Event) {
    event.stopPropagation(); 
    this.router.navigate(['/edit/' + this.note.id])
  }
}
