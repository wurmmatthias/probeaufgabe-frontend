import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class Auth {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('https://dummyjson.com/auth/login', {
      username,
      password
    }).pipe(
      tap(response => {
        localStorage.setItem('accessToken', response.accessToken);
        this.isLoggedInSubject.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    this.isLoggedInSubject.next(false);
  }

  checkToken(): void {
    const token = localStorage.getItem('accessToken');
    this.isLoggedInSubject.next(!!token);
  }
}
