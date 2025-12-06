import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/api/auth/login`, request).pipe(
      tap((response) => {
        if (response.success) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated() {
    return localStorage.getItem(this.tokenKey) !== null;
  }
}
