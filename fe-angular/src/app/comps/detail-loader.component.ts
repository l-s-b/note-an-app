import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesHttpService } from 'src/app/shared/notes.service';
import { Note } from 'src/app/shared/note.model';
import { AuthService } from '../shared/auth.service';

@Component({ template: '', })
export class DetailLoader {
  foundNote: Note | null = null;

  constructor(
    public httpService: NotesHttpService,
    public authService: AuthService,
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
    this.httpService.getNoteById(id).subscribe(
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
