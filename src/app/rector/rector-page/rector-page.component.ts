import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-rector-page',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    CategoryComponent,
    ProductComponent
  ],
  templateUrl: './rector-page.component.html',
  styleUrls: ['./rector-page.component.css']
})
export class RectorPageComponent { }

