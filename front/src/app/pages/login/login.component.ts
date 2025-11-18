import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    // placeholder: remplacer par appel réel à un service d'authentification
    console.log('Tentative de connexion', { email: this.email, password: this.password, remember: this.remember });
  }

}
