import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesHttpService } from 'src/app/shared/notes.service';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent extends Note {
  constructor(
    private httpService: NotesHttpService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'))! || 0;
      this.getNoteById(id);
    });
  }

  getNoteById = (id: number) => {
    this.httpService.getNote(id).subscribe(
      (response: any) => {
        this.id = response.id;
        this.title = response.title;
        this.description = response.description;
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
