import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { env } from 'src/envs/development';
import { Observable } from 'rxjs';
import { User } from './login.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}
  ngOnInit() {}

  setTokenOptions(): {[headers: string]: HttpHeaders} {
    const customHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + env.jwt)
    return { headers: customHeaders };
  }

  postLogin(user: User): Observable<Object> {
    return this.http.post<User>(
      env.apiBaseUrl + '/auth/login',
      user,
      {withCredentials: true},
    );
  }
}
