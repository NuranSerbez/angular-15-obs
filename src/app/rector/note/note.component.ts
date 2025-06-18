import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

constructor(private http: HttpClient) {}

  addNote() {
    const note = {
      id: String,
      studentId: String,
      value: String
    };

    const headers = this.getHeaders();
    this.http.post('http://localhost:8080/api/notes', note, { headers }).subscribe({
      next: res => console.log("Not eklendi:", res),
      error: err => console.error("Ekleme hatası:", err)
    });
  }

  deleteNote() {
    const noteId = String;
    const headers = this.getHeaders();
    this.http.delete(`http://localhost:8080/api/notes/${noteId}`, { headers }).subscribe({
      next: res => console.log("Not silindi:", res),
      error: err => console.error("Silme hatası:", err)
    });
  }

  updateNote() {
    const note = {
      id: String,
      studentId: String,
      value: String
    };

    const headers = this.getHeaders();
    this.http.put(`http://localhost:8080/api/notes/${note.id}`, note, { headers }).subscribe({
      next: res => console.log("Not güncellendi:", res),
      error: err => console.error("Güncelleme hatası:", err)
    });
  }

  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
