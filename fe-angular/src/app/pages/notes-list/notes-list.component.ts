import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Note } from 'src/app/shared/note.model';
import { NotesHttpService } from 'src/app/shared/notes.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NoteListPage {
  notes!: Note[];

  constructor(
    private httpService: NotesHttpService,
    private authService: AuthService,
    private router: Router
   ) {}

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

  searchNotes(query: string) {
    if (query.trim() !== '') {
      this.httpService.getNotes().subscribe(
        (response: Object) => {
          const parsedList: Note[] = JSON.parse(JSON.stringify(response));
          this.notes = parsedList.filter(
            note =>
              note.title.toLowerCase().includes(query.toLowerCase()) ||
              note.description.toLowerCase().includes(query.toLowerCase())
          )
        },
        (error) => { console.log(error); }
      );
    } else {
      this.getAllNotes();
    }
  }

  WipeDeletedNoteFromList(deletedNoteId: number) {
    this.notes = this.notes.filter(note => note.id !== deletedNoteId);
  }

  checkSessionAndGoTo(endpoint: string) {
    const currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    this.authService.catchAuthErrors(currentUser);
    if (currentUser !== null) {
      this.authService.getUsersJWT().subscribe(
        (response: any) => { 
          this.authService.catchAuthErrors(response);
          this.authService.getProfile(response.jwt).subscribe(
            (response: any) => {
              this.authService.catchAuthErrors(response);
              if (response.username) {
                this.router.navigate([endpoint])
              }
            }
          )
        }
      );
    }
  }
}
