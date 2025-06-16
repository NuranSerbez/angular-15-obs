import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  passwordData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  successMessage = 'Başarılı';
  errorMessage = 'Başarısız';
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

    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Şifreniz başarıyla değiştirildi!';
      form.resetForm();
    }, 1500);
  }
}
