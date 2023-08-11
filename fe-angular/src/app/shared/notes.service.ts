import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
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

  postNote(note: Note): Observable<any> {
    return this.authService.getUsersJWT().pipe(
      switchMap((user: any) => {
        const options = this.authService.setTokenOptions(user.jwt);
        console.log(options)
        return this.http.post<Note>(
          env.apiBaseUrl + '/notes',
          note,
          options
        );
      }),
    );
  }

  patchNote(note: Note): Observable<WebGLVertexArrayObject> {
    return this.authService.getUsersJWT().pipe(
      switchMap((user: any) => {
        const options = this.authService.setTokenOptions(user.jwt);
        return this.http.patch<Note>(
          env.apiBaseUrl + '/notes/' + note.id,
          note,
          options
        );
      }),
    );
  }

  deleteNote(id: Number): Observable<Object> {
    return this.authService.getUsersJWT().pipe(
      switchMap((user: any) => {
        const options = this.authService.setTokenOptions(user.jwt);
        return this.http.delete<Number>(
          env.apiBaseUrl + '/notes/' + id,
          options
        );
      }),
    );
  }

}
