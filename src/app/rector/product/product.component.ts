import { Component, OnInit } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NoteComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
title = "Ana Sayfa";
  constructor(private http: HttpClient) {}
  //Program butonları
  addProgram(){
  const program = {
    id: '' as any,
    programTuru: '' as any,
    value: '' as any,
  }
  const headers = this.getHeaders();
  this.http.post('http://localhost:8080/api/program', program, { headers }).subscribe({
    next: res => console.log("Program eklendi:", res),
    error: err => console.error("Ekleme hatası:", err)
  });
}
  deleteProgram(){
    const programId = '' as any;
      const headers = this.getHeaders();
      this.http.delete('http://localhost:8080/api/program/{programId}', { headers }).subscribe({
        next: res => console.log("Program silindi:", res),
        error: err => console.error("Silme hatası:", err)
    });
}
  updateProgram(){
    const program = {
      id: '' as any,
      programTuru: '' as any,
      value: '' as any,
    }
    const headers = this.getHeaders();
    this.http.put('http://localhost:8080/api/program/${program.id}', program, { headers }).subscribe({
      next: res => console.log("Program güncellendi:", res),
      error: err => console.error("Güncelleme hatası:", err)
    });
}
  //Fakülte butonları
  addFakulte(){
    const fakulte = {
      id: '' as any,
      fakulteAdi: '' as any,
     value: '' as any,
  }
    const headers = this.getHeaders();
    this.http.post('http://localhost:8080/api/fakulte', fakulte, { headers }).subscribe({
      next: res => console.log("Fakülte eklendi:", res),
      error: err => console.error("Ekleme hatası:", err)
  });
}
  deleteFakulte(){
    const fakulteId = '' as any;
    const headers = this.getHeaders();
    this.http.delete('http://localhost:8080/api/fakulte/${fakulteId}', { headers }).subscribe({
      next: res => console.log("Fakülte silindi: ", res),
      error: err =>console.error("Silme hatası:", err)
  });
}
  updateFakulte(){
    const fakulkte = {
      id: '' as any,
      fakulteAdi: '' as any,
      value: '' as any,
    };
    const headers = this.getHeaders();
    this.http.put('http://localhost:8080/api/fakulte/${fakulte.id}', fakulkte, { headers }).subscribe({
      next: res => console.log("Fakülte güncellendi: ", res),
      error: err =>console.error("Güncelleme hatası:", err)
  });
}
//Bolum butonları
  addBolum(){
    const bolum = {
      id: '' as any,
      bolumAdi: '' as any,
      fakulteId: '' as any,
      programId: '' as any,
    };
    const headers = this.getHeaders();
    this.http.post('http://localhost:8080/api/bolum', bolum, { headers}).subscribe({
      next: res => console.log("Bölüm eklendi:", res),
      error: err => console.error("Ekleme hatası:", err)     
    });
  }
  deleteBolum(){
    const bolumId = '' as any;
    const headers = this.getHeaders();
    this.http.delete('http://localhost:8080/api/bolum/${bolumId}', { headers }).subscribe({
      next: res => console.log("Bölüm silindi:", res),
      error: err => console.error("Silme hatası:", err)
    });
  }
  updateBolum(){
    const bolum = {
      id: '' as any,
      bolumAdi: '' as any,
      fakulteId: '' as any,
      programId: '' as any,
    };
    const headers = this.getHeaders();
    this.http.put('http://localhost:8080/api/bolum/${bolum.id}', bolum, { headers }).subscribe({
      next: res => console.log("Bölüm silindi:", res),
      error: err => console.error("Silme hatası:", err)
    });
  }
//Ders butonları
  addDers(){
    const ders = {
      id: '' as any,
      dersAdi: '' as any,
      kontenjan: '' as any,
      programId: '' as any,
      akademisyenId: '' as any,
    };
    const headers = this.getHeaders();
    this.http.post('http://localhost8080/api/ders', ders, { headers }).subscribe({
      next: res => console.log("Ders eklendi:", res),
      error: err=> console.error("Ekleme hatası:", err)
    });
  }
  deleteDers(){
    const dersId = '' as any;
    const headers = this.getHeaders();
    this.http.delete('http://localhost:8080/api/ders/${dersId}', {headers}).subscribe({
      next: res => console.log("Ders silindi:", res),
      error: err=> console.log("Silme hatası:", err)
    });
  }
  updateDers(){
    const ders = {
      id: '' as any,
      dersAdi: '' as any,
      kontenjan: '' as any,
      programId: '' as any,
      akademisyenId: '' as any,
    };
    const headers = this.getHeaders();
    this.http.delete('http://localhost:8080/api/ders/${ders.id}', {headers}).subscribe({
      next: res => console.log("Ders güncellendi:", res),
      error: err=> console.log("Güncelleme hatası:", err)
    });
  }
//Not butonları
  addNot() {
    const note = {
      id: '' as any,
      studentId: '' as any,
      value: '' as any,
    };
    const headers = this.getHeaders();
    this.http.post('http://localhost:8080/api/not', note, { headers }).subscribe({
      next: res => console.log("Not eklendi:", res),
      error: err => console.error("Ekleme hatası:", err)
    });
  }
  deleteNot() {
    const noteId = '' as any;
    const headers = this.getHeaders();
    this.http.delete('http://localhost:8080/api/not/${noteId}', { headers }).subscribe({
      next: res => console.log("Not silindi:", res),
      error: err => console.error("Silme hatası:", err)
    });
  }
  updateNot() {
    const note = {
      id: '' as any,
      studentId: '' as any,
      value: '' as any,
    };
    const headers = this.getHeaders();
    this.http.put('http://localhost:8080/api/not/${note.id}', note, { headers }).subscribe({
      next: res => console.log("Not güncellendi:", res),
      error: err => console.error("Güncelleme hatası:", err)
    });
  }
//Devamsızlık butonları
  addDevamsizlik(){
    const devamsizlik = {
      id: '' as any,
      toplamSaat: '' as any,
      dersId: '' as any,
    };
    const headers = this.getHeaders();
    this.http.post('http://localhost:8080/api/devamsizlik', devamsizlik, {headers}).subscribe({
      next: res => console.log("Devamsızlık eklendi:", res),
      error: err=> console.log("Ekleme hatası:", err)
    });
  }
  deleteDevamsizlik(){
    const devamsizlikId = '' as any;
    const headers = this.getHeaders();
    this.http.delete('http://localhost:8080/api/devamsizlik/${devamsizlikId}', {headers}).subscribe({
      next: res=> console.log("Devamsızlık silindi:", res),
      error: err=> console.log("Silme hatası:", err)
    });
  }
  updateDevamsizlik(){
    const devamsizlik = {
      id: '' as any,
      toplamSaat: '' as any,
      dersId: '' as any,
    };
    const headers = this.getHeaders();
    this.http.put('http://localhost:8080/api/devamsizlik/${devamsizlik.id}', devamsizlik, {headers}).subscribe({
      next: res => console.log("Devamsızlık güncellendi:", res),
      error: err=> console.log("Güncelleme hatası:", err)
    });
  }
//Değerlendirme butonları
  addDegerlendirme(){
    const degerlendirme = {
      id:'' as any,
      ortalama:'' as any,
      akademisyenId:'' as any,
      ogrenciId:'' as any,
    };
    const headers = this.getHeaders();
    this.http.post('http://localhost:8080/api/degerlendirme', degerlendirme, { headers }).subscribe({
      next: res => console.log("Değerlendirme eklendi: ", res),
      error: err=> console.log("Ekleme hatası:", err)
    });
  }
  deleteDegerlendirme(){
    const degerlendirmeId = '' as any;
    const headers = this.getHeaders();
    this.http.delete('http://localhost:8080/api/degerlendirme/${degerlendirmeId}', {headers}).subscribe({
      next: res=> console.log("Değerlendirme silindi:", res),
      error: err=> console.log("Silme hatası:", err)
    });
  }
  updateDegerlendirme(){
    const degerlendirme = {
      id:'' as any,
      ortalama:'' as any,
      akademisyenId:'' as any,
      ogrenciId:'' as any,
    };
    const headers = this.getHeaders();
    this.http.put('http://localhost:8080/api/degerlendirme/${degerlendirme.id}', degerlendirme, {headers}).subscribe({
      next: res => console.log("Değerlendirme güncellendi:", res),
      error: err=> console.log("Güncelleme hatası:", err)
    });
  }
  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
ngOnInit(): void {

}
}