import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetailLoader } from 'src/app/comps/detail-loader.component';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNotePage extends DetailLoader implements OnInit {
  note!: Note

  onSubmit(form: NgForm) {
    console.log(form.form.value);
  }

}
