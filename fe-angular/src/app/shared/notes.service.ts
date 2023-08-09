import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { env } from 'src/envs/development';

@Injectable({ providedIn: 'root' })
export class NotesHttpService {

  notes: Note[] = new Array<Note>();

  constructor(private http: HttpClient) {}
  ngOnInit() {}

  getNotes(): Observable<Object> {
    return this.http.get<Object>(env.apiBaseUrl + '/notes');
  }

  getNote(id: number): Observable<Object> {
    return this.http.get<Object>(env.apiBaseUrl + '/notes/' + id)
  }

  postNote(note: Note): Observable<Object> {
    const customHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiYmV0YS11c2VyIiwiaWF0IjoxNjkxNjE5NzgwLCJleHAiOjE2OTE2MjU3ODB9.XYDgKT9EErWU7gBUF4QzK_mcuoLuuHCWvYkWgS7ufCE')

    const options = {
      headers: customHeaders // Pass the custom headers to the options object
    };

    return this.http.post<Note>(
      env.apiBaseUrl + '/notes',
      note,
      options
    );
  }
}
