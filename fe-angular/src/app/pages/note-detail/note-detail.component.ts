import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesHttpService } from 'src/app/shared/notes.service';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent {
  foundNote: Note | null = null;

  constructor(
    private httpService: NotesHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id')) || 0;
      this.getNoteById(id);
    });
  }

  getNoteById = (id: number) => {
    this.httpService.getNote(id).subscribe(
      (response: any) => {
        this.foundNote = {
          id: response.id,
          title: response.title,
          description: response.description
        };
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
