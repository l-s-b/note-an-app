import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Note } from 'src/app/shared/note.model';
import { NotesHttpService } from 'src/app/shared/notes.service';

@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})

export class NewNotePage implements OnInit {

  note!: Note;

  constructor(
    private authService: AuthService,
    private httpService: NotesHttpService,
    private router: Router
  ) {}
  
  ngOnInit() { this.note = new Note(); }

  onSubmit(form: NgForm) { this.postNote(form.form.value); }

  postNote = (note: Note) => {
    this.httpService.postNote(note).subscribe(
      () => { this.router.navigate(['/']); },
      (error) => {
        this.authService.catchAuthErrors(null);
        console.log('Note Post failure:\n' + JSON.stringify(error));
      } 
    );
  }
}
