import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
mobileMenuOpen = false;

constructor(public auth: AuthService , private router: Router) {}

toggleMobileMenu() {
  this.mobileMenuOpen = !this.mobileMenuOpen;
}

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  
}
