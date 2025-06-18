import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericApiService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  add(resource: string, data: any) {
    return this.http.post(`http://localhost:8080/api/${resource}`, data, {
      headers: this.getHeaders()
    });
  }

  update(resource: string, id: any, data: any) {
    return this.http.put(`http://localhost:8080/api/${resource}/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  delete(resource: string, id: any) {
    return this.http.delete(`http://localhost:8080/api/${resource}/${id}`, {
      headers: this.getHeaders()
    });
  }
}
