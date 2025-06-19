import { Component } from '@angular/core';
import { GenericApiService } from 'src/app/service/generic-api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html'
})
export class ProductComponent {
  title = "Ana Sayfa";
    constructor(private service: GenericApiService) {}
getNotlar() {
  this.service.get('not').subscribe({
    next: res => console.log('Girilen notlar:', res),
    error: err => console.error('Notları listeleme hatası:', err)
  });
}
getDevamsizlik(){
this.service.get('devamsizlik').subscribe({
    next: res => console.log('Girilen devamsızlıklar:', res),
    error: err => console.error('Devamsızlık listeleme hatası:', err)
  });
}
getDersler(){
this.service.get('ders').subscribe({
    next: res => console.log('Kayıtlı dersler:', res),
    error: err => console.error('Dersleri listeleme hatası:', err)
  });
}
}

