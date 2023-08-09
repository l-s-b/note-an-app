import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNotePage implements OnInit {

  note!: Note
  
  onSubmit(form: NgForm) {
    console.log(form.form.value);
  }

  ngOnInit() {
    this.note = new Note();
  }
  
}
