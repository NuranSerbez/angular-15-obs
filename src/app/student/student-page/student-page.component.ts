import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    CategoryComponent,
    ProductComponent
  ],
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent { }
