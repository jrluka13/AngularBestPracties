import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../../layouts/auth/models/interfaces';

@Injectable()
export class AuthService {
  private accessToken;

  private refreshToken;

  constructor(private http: HttpClient) {
  }

  login(user: User): any {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', user)
      .pipe(
        tap(
          () => {
            const accessToken = 'Bearer 123123123123123123';
            const refreshToken = 'Bearer 54465465465456756';
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            this.setAccessToken(accessToken);
          },
        ),
      );
  }

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  getAccessToken(): string {
    return this.accessToken;
  }

  logout(): void {
    this.setAccessToken(null);
  }

  isAuthenticated(): boolean {
    return this.accessToken;
  }
}
