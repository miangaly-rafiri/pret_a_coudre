import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

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

    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      this.err = 'Veuillez remplir tous les champs';
      clearMessages();
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.err = 'Les mots de passe ne correspondent pas';
      clearMessages();
      return;
    }

    // ⛔ Vérifier si email déjà utilisé
    const ok = this.auth.register(this.fullName, this.email, this.password);
    if (!ok) {
      this.err = 'Un compte existe déjà avec cet email.';
      clearMessages();
      return;
    }

    // ✔ Succès
    this.success = "Inscription réussie ! Redirection...";
    clearMessages();

    setTimeout(() => {
      this.auth.login(this.email, this.password);
      this.router.navigate(['/profil']); // redirige vers profil
    }, 1500);

    console.log('Nouvel utilisateur', {
      fullName: this.fullName,
      email: this.email
    });
  }
}
