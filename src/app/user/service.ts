import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Service {
  private apiUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  login(loginData: { email: string; password: string }) {
    return this.http.post<any>('http://localhost:8080/api/auth/login', loginData);
  }
}
