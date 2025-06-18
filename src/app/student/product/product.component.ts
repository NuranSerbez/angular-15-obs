import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html'
})
export class ProductComponent {
  title = "Ana Sayfa";
  constructor(private router: Router) {}

goToNotDetail(studentId: number, noteId: number) {
  this.router.navigate(['/student', studentId, 'note', noteId]);
}
}
