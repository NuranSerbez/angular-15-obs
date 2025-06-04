// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

// }
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerData = {
    email: '',
    password: '',
    rol: '',
  };

  constructor(private router: Router) {}

  onRegister() {
    if (
      this.registerData.email &&
      this.registerData.password &&
      this.registerData.rol
    ) {
      localStorage.setItem('token', 'mock-token-123');
      this.router.navigate(['/login']);
    } else {
      alert('E-posta şifre ve rol boş olamaz.');
    }
  }
}
