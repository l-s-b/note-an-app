import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { NotesHttpService } from 'src/app/shared/notes.service';

@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})

export class NewNotePage implements OnInit {

  note!: Note;

  constructor(private httpService: NotesHttpService) {}
  
  ngOnInit() {
    this.note = new Note();
  }

  onSubmit(form: NgForm) {
    this.postNote(form.form.value)
  }

  postNote = (note: Note) => {
    this.httpService.postNote(note).subscribe(
      (response: Object) => { console.log('Note post Success!\nResponse: ', response) },
      (error) => { console.log('Note Post failure:\n' + JSON.stringify(error)); } 
    );
  }
}
