import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>('https://dummyjson.com/auth/login', {
      username,
      password
    }).pipe(
      tap(response => {
        if (response?.token) {
          this.loggedInSubject.next(true);
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  logout() {
    this.loggedInSubject.next(false);
    localStorage.removeItem('authToken');
  }

  // Optional: auto-login if token exists
  checkToken() {
    const token = localStorage.getItem('authToken');
    this.loggedInSubject.next(!!token);
  }
}
