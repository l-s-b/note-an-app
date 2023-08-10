import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesHttpService } from 'src/app/shared/notes.service';
import { Note } from 'src/app/shared/note.model';
import { DetailLoader } from 'src/app/comps/detail-loader.component';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailPage extends DetailLoader {}
