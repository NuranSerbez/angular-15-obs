import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private http = inject(HttpClient);
  private router = inject(Router);

  loginData = {
    email: '',
    password: '',
  };

  loading = false;
  errorMessage = '';

  onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'E-posta ve şifre boş olamaz.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.http.post<any>('http://localhost:8080/auth/login', this.loginData).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);

        if (response.tckn) {
          localStorage.setItem('tckn', response.tckn);
        }

        switch (response.role) {
          case 'IDARECI':
            this.router.navigate(['/rector']);
            break;
          case 'OGRENCI':
            this.router.navigate(['/student']);
            break;

          default:
            this.router.navigate(['/dashboard']);
            break;
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Giriş başarısız oldu.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
