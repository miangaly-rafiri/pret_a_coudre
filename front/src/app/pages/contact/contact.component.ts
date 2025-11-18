import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';
  subscribe = false;

  sending = false;
  success: string | null = null;
  error: string | null = null;

  onSubmit() {
    if (!this.name || !this.email || !this.message) {
      this.error = 'Veuillez remplir les champs obligatoires.';
      return;
    }

    this.error = null;
    this.sending = true;
    this.success = null;

    setTimeout(() => {
      this.sending = false;
      this.success = "Merci ! Votre message a bien été envoyé.";

      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.subscribe = false;
    }, 900);
  }
}
