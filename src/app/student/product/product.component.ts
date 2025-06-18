import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html'
})
export class ProductComponent {
  title = "Ana Sayfa";

  // puan = [
  //   { id: 1, ders: 'Math', puani: 70 },
  //   { id: 2, ders: 'Network', puani: 80 }
  // ];

  // ders = ['Math', 'Network'];
  // devam = ['Math - 2 Gün', 'Network - 0 Gün'];

  constructor(private router: Router) {}

goToNotDetail(studentId: number, noteId: number) {
  this.router.navigate(['/student', studentId, 'note', noteId]);
}

}
