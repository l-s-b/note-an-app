import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { env } from 'src/envs/development';
import { Observable, catchError } from 'rxjs';
import { User } from './login.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}
  ngOnInit() {}

  setTokenOptions(jwt: string): {[headers: string]: HttpHeaders} {
    const customHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + jwt)
    return { headers: customHeaders };
  }

  postLogin(user: User): Observable<Object> {
    return this.http.post<User>(
      env.apiBaseUrl + '/auth/login',
      user,
      {withCredentials: true},
    );
  }

  getUsersJWT(): Observable<string> {
    const currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    this.catchAuthErrors(currentUser);
  
    return this.http.get<string>(
      env.apiBaseUrl + `/users/${currentUser}/token`
    );
  }

  getProfile(jwt: string): any {
    return this.http.get<Object>(
      env.apiBaseUrl + '/auth/profile',
      this.setTokenOptions(jwt)
    )
  }

  catchAuthErrors(output: any) {
    if (output === null) {
      alert('Log in first!');
      this.router.navigate(['/login']);
    }
  }
}
