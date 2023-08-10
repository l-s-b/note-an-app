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
  setTokenOptions(): {[headers: string]: HttpHeaders} {
    const customHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + env.jwt)
    return { headers: customHeaders };
  }

  postNote(note: Note): Observable<Object> {
    return this.http.post<Note>(
      env.apiBaseUrl + '/notes',
      note,
      this.setTokenOptions()
    );
  }

  deleteNote(id: Number): Observable<Object> {
    return this.http.delete<Number>(
      env.apiBaseUrl + '/notes/' + id,
      this.setTokenOptions()
    )
  }
}
