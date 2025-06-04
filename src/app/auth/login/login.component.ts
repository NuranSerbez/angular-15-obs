// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
// email: string = '';
//   password: string = '';

//   onSubmit() {
//     console.log('Email :', this.email);
//     console.log('Password:', this.password);
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginData.email && this.loginData.password) {
      localStorage.setItem('token', 'mock-token-123');
      this.router.navigate(['/dashboard']);
    } else {
      alert('E-posta ve şifre boş olamaz.');
    }
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}

