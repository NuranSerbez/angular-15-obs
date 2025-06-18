import { Component, OnInit } from '@angular/core';
import { GenericApiService } from 'src/app/service/generic-api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
title = "Ana Sayfa";
  constructor(private service: GenericApiService) {}

addProgram() {
  const program = { id: '', programTuru: '', value: '' };
  this.service.add('program', program).subscribe({
    next: res => console.log('Program eklendi:', res),
    error: err => console.error('Ekleme hatası:', err)
  });
}
updateProgram() {
  const program = { id: '', programTuru: '', value: '' };
  this.service.update('program', program.id, program).subscribe({
    next: res => console.log('Program güncellendi:', res),
    error: err => console.error('Güncelleme hatası:', err)
  });
}
deleteProgram() {
  const programId = '';
  this.service.delete('program', programId).subscribe({
    next: res => console.log("Program silindi:", res),
    error: err => console.log("Silme hatası:", err)
  });
}

addFakulte() {
  const fakulte = { id: '', fakulteAdi: '' };
  this.service.add('fakulte', fakulte).subscribe({
    next: res => console.log('Fakulte eklendi:', res),
    error: err => console.error('Ekleme hatası:', err)
  });
}
updateFakulte() {
  const fakulte = { id: '', fakulteAdi: '' };
  this.service.update('fakulte', fakulte.id, fakulte).subscribe({
    next: res => console.log('Fakulte güncellendi:', res),
    error: err => console.error('Güncelleme hatası:', err)
  });
}
deleteFakulte() {
  const fakulteId = '';
  this.service.delete('fakulte', fakulteId).subscribe({
    next: res => console.log("Fakülte silindi:", res),
    error: err => console.log("Silme hatası:", err)
  });
}

addBolum() {
  const bolum = { id: '', bolumAdi: '', fakulteId: '', programId: '' };
  this.service.add('bolum', bolum).subscribe({
    next: res => console.log('Bölüm eklendi:', res),
    error: err => console.error('Ekleme hatası:', err)
  });
}
updateBolum() {
  const bolum = { id: '', bolumAdi: '', fakulteId: '', programId: '' };
  this.service.update('bolum', bolum.id, bolum).subscribe({
    next: res => console.log('Bölüm güncellendi:', res),
    error: err => console.error('Güncelleme hatası:', err)
  });
}
deleteBolum() {
  const bolumId = '';
  this.service.delete('bolum', bolumId).subscribe({
    next: res => console.log("Bölüm silindi:", res),
    error: err => console.log("Silme hatası:", err)
  });
}

addDers() {
  const ders = { id: '', dersAdi: '', kontenjan: '', programId: '', akademisyenId: '' };
  this.service.add('ders', ders).subscribe({
    next: res => console.log('Ders eklendi:', res),
    error: err => console.error('Ekleme hatası:', err)
  });
}
updateDers() {
  const ders = { id: '', dersAdi: '', kontenjan: '', programId: '', akademisyenId: '' };
  this.service.update('ders', ders.id, ders).subscribe({
    next: res => console.log('Ders güncellendi:', res),
    error: err => console.error('Güncelleme hatası:', err)
  });
}
deleteDers() {
  const dersId = '';
  this.service.delete('ders', dersId).subscribe({
    next: res => console.log("Ders silindi:", res),
    error: err => console.log("Silme hatası:", err)
  });
}

addNot() {
  const not = { id: '', vize:'', final:'', ortalama: '', dersAtamaId:''};
  this.service.add('not', not).subscribe({
    next: res => console.log('Not eklendi:', res),
    error: err => console.error('Ekleme hatası:', err)
  });
}
updateNot() {
  const not = {  id: '', vize:'', final:'', ortalama: '', dersAtamaId:'' };
  this.service.update('not', not.id, not).subscribe({
    next: res => console.log('Not güncellendi:', res),
    error: err => console.error('Güncelleme hatası:', err)
  });
}
deleteNot() {
  const notId = '';
  this.service.delete('not', notId).subscribe({
    next: res => console.log("Not silindi:", res),
    error: err => console.log("Silme hatası:", err)
  });
}

addDevamsizlik() {
  const devamsizlik = { id: '', toplamSaat: '', dersAtamaId: '' };
  this.service.add('devamsizlik', devamsizlik).subscribe({
    next: res => console.log('Devamsızlık eklendi:', res),
    error: err => console.error('Ekleme hatası:', err)
  });
}
updateDevamsizlik() {
  const devamsizlik = { id: '', toplamSaat: '', dersAtamaId: '' };
  this.service.update('devamsizlik', devamsizlik.id, devamsizlik).subscribe({
    next: res => console.log('Devamsızlık güncellendi:', res),
    error: err => console.error('Güncelleme hatası:', err)
  });
}
deleteDevamsizlik() {
  const devamsizlikId = '';
  this.service.delete('devamsizlik', devamsizlikId).subscribe({
    next: res => console.log("Devamsızlık silindi:", res),
    error: err => console.log("Silme hatası:", err)
  });
}

addDegerlendirme() {
  const degerlendirme = { id: '', ortalama: '', akademisyenId: '', ogrenciId: '' };
  this.service.add('degerlendirme', degerlendirme).subscribe({
    next: res => console.log('Değerlendirme eklendi:', res),
    error: err => console.error('Ekleme hatası:', err)
  });
}
updateDegerlendirme() {
  const degerlendirme = { id: '', ortalama: '', akademisyenId: '', ogrenciId: '' };
  this.service.update('degerlendirme', degerlendirme.id, degerlendirme).subscribe({
    next: res => console.log('Değerlendirme güncellendi:', res),
    error: err => console.error('Güncelleme hatası:', err)
  });
}
deleteDegerlendirme() {
  const degerlendirmeId = '';
  this.service.delete('degerlendirme', degerlendirmeId).subscribe({
    next: res => console.log("Değerlendirme silindi:", res),
    error: err => console.log("Silme hatası:", err)
  });
}
ngOnInit(): void {}
}