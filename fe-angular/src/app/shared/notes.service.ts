import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { env } from 'src/envs/development';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class NotesHttpService {

  notes: Note[] = new Array<Note>();

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    ) {}
  ngOnInit() {}

  // Notes CRUD
  getNotes(): Observable<Object> {
    return this.http.get<Object>(env.apiBaseUrl + '/notes');
  }

  getNoteById(id: number): Observable<Object> {
    return this.http.get<Object>(env.apiBaseUrl + '/notes/' + id)
  }

  postNote(note: Note): Observable<Object> {
    return this.http.post<Note>(
      env.apiBaseUrl + '/notes',
      note,
      this.authService.setTokenOptions()
    );
  }

  patchNote(note: Note): Observable<Object> {
    return this.http.patch<Note>(
      env.apiBaseUrl + '/notes/' + note.id,
      note,
      this.authService.setTokenOptions()
    );
  }

  deleteNote(id: Number): Observable<Object> {
    return this.http.delete<Number>(
      env.apiBaseUrl + '/notes/' + id,
      this.authService.setTokenOptions()
    )
  }
}
