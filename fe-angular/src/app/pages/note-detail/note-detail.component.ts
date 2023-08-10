import { Component } from '@angular/core';
import { DetailLoader } from 'src/app/comps/detail-loader.component';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailPage extends DetailLoader {}
