import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NotesHttpService {

  private baseUrl = 'http://localhost:3000';

  notes: Note[] = new Array<Note>();

  constructor(private http: HttpClient) {}
  ngOnInit() {}

  getNotes(): Observable<Object> {
    return this.http.get<Object>(this.baseUrl + '/notes');
  }

  getNote(id: number): Observable<Object> {
    return this.http.get<Object>(this.baseUrl + '/notes/' + id)
  }
}
