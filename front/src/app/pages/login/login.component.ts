import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  remember = false;

  emailtest = 'test@gmail.com';
  passwordtest = 'Test1234';

  err = '';
  success = '';

  constructor(private router: Router, public auth: AuthService) { }

  onSubmit() {
    const clearMessages = () => {
    setTimeout(() => {
      this.err = '';
      this.success = '';
    }, 1500);
  };

    if (!this.email || !this.password) {
      this.err = 'Veuillez remplir tous les champs.';
      clearMessages();
      return;
    }

    if (this.email !== this.emailtest || this.password !== this.passwordtest) {
      this.err = 'Email ou mot de passe incorrect.';
      clearMessages();
      return;
    }

    if (this.email === this.emailtest && this.password === this.passwordtest) {
      this.success = "Connexion réussie ! Redirection en cours...";
      this.auth.login();
      clearMessages();
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    }

    console.log('Tentative de connexion', {
      email: this.email,
      password: this.password,
      remember: this.remember
    });
  }
}