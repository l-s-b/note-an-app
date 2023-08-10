import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesHttpService } from 'src/app/shared/notes.service';
import { Note } from 'src/app/shared/note.model';

@Component({ template: '', })
export class DetailLoader {
  foundNote: Note | null = null;

  constructor(
    public httpService: NotesHttpService,
    public route: ActivatedRoute,
    public router: Router,
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
