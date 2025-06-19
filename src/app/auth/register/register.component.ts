import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  private http = inject(HttpClient);
  private router = inject(Router);

  registerData = {
    email: '',
    password: '',
    rol: '',
    tckn: '',
  };

  loading = false;
  errorMessage = '';

  onRegister() {
    if (
      !this.registerData.email ||
      !this.registerData.password ||
      !this.registerData.rol ||
      !this.registerData.tckn
    ) {
      this.errorMessage = 'E-posta, şifre ve rol boş olamaz.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.http.post<any>('http://localhost:8080/auth/signup', this.registerData)
      .subscribe({
        next: (response) => { this.router.navigate(['/change-password']);},
        error: (err) => {
          this.errorMessage = err.error?.message || 'Kayıt işlemi başarısız oldu.';
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}
