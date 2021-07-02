import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../../layouts/auth/models/interfaces';

export interface Tokens {
  jwt: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  private accessToken;

  private refToken;

  constructor(private http: HttpClient) {
  }

  login(user: User): any {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', user)
      .pipe(
        tap(
          () => {
            const tokens = { jwt: '123123123123123123', refreshToken: 'eyjwqqfwr234234gereg' };
            this.setAccessToken(tokens.jwt);
            this.setRefreshToken(tokens.refreshToken);
          },
        ),
      );
  }

  setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    this.accessToken = accessToken;
  }

  setRefreshToken(refreshToken: string): void {
    localStorage.setItem('refreshToken', refreshToken);
    this.refToken = refreshToken;
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  logout(): void {
    this.setAccessToken(null);
    this.setRefreshToken(null);
  }

  isAuthenticated(): boolean {
    return Boolean(this.accessToken);
  }

  getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  // tslint:disable-next-line:typedef
  refreshToken() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      refreshToken: this.getRefreshToken(),
    }).pipe(tap((tokens: Tokens) => {
      localStorage.setItem('accessToken', tokens.jwt);
    }));
  }
}
