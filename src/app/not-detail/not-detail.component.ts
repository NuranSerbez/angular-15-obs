import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-detail',
  standalone: true,
  template: `
    <h2>Not Detayı</h2>
    <p>Öğrenci ID: {{ studentId }}</p>
    <p>Not ID: {{ noteId }}</p>
    <p>Ders: {{ ders }}</p>
    <p>Puan: {{ puan }}</p>
  `
})
export class NotDetailComponent implements OnInit {
  studentId!: string | null;
  noteId!: string | null;
  ders!: string;
  puan!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('studentId');
    this.noteId = this.route.snapshot.paramMap.get('noteId');
  }
}