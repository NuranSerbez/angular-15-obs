import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    confirmPassword: ''
  };

  successMessage = '';
  errorMessage = '';
  loading = false;

  onChangePassword(form: NgForm) {
    if (form.invalid || this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      this.errorMessage = 'Lütfen tüm alanları doğru doldurun ve şifrelerin eşleştiğinden emin olun.';
      this.successMessage = '';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.put<any>('http://localhost:8080/api/auth/change-password', this.passwordData)
      .subscribe({
        next: (response) => {
          this.successMessage = 'Şifre başarıyla değiştirildi.';
          this.errorMessage = '';
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Şifre değiştirme işlemi başarısız oldu.';
          this.successMessage = '';
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}
