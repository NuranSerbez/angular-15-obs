import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  private http = inject(HttpClient);
  private router = inject(Router);

  passwordData = {
    oldPassword: '',
    newPassword: '',
  };

  loading = false;
  successMessage = '';
  errorMessage = '';

  onChangePassword(form: NgForm) {
  console.log("Gelen TCKN:", this.passwordData.oldPassword);

  if (form.invalid) {
    this.errorMessage = 'Lütfen formu eksiksiz doldurun.';
    this.successMessage = '';
    return;
  }

  this.loading = true;
  this.errorMessage = '';
  this.successMessage = '';

  const token = localStorage.getItem('token') || '';
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  this.http.put<any>('http://localhost:8080/auth/change-password', this.passwordData, { headers })
    .subscribe({
      next: (response) => {
        this.successMessage = response.message || 'Şifre başarıyla değiştirildi.';
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Şifre değiştirme başarısız oldu.';
        this.loading = false;
      }
    });
}
}
