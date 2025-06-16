import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = "Ana Sayfa";

  puan = [
    { ders: 'Math', puani: 70 },
    { ders: 'Network', puani: 80 }
  ];

  ders = ['Math', 'Network'];

  devam = ['Math - 2 Gün', 'Network - 0 Gün'];

  constructor() { }

  ngOnInit(): void { }
}
