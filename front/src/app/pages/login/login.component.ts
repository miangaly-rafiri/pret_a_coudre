import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

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

    // 🔥 Tentative de connexion avec AuthService
    const ok = this.auth.login(this.email, this.password);

    if (!ok) {
      this.err = 'Email ou mot de passe incorrect.';
      clearMessages();
      return;
    }

    // ✔ Connexion réussie
    this.success = "Connexion réussie ! Redirection...";
    clearMessages();

    setTimeout(() => {
      this.router.navigate(['/profil']);
    }, 1500);

    console.log('Tentative de connexion', {
      email: this.email,
      remember: this.remember
    });
  }
}
