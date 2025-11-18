import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
mobileMenuOpen = false;

constructor(public auth: AuthService) {}

toggleMobileMenu() {
  this.mobileMenuOpen = !this.mobileMenuOpen;
}

  logout() {
    this.auth.logout();
  }
}
