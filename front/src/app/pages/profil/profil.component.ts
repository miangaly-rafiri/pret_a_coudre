import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth/auth.service';


@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})

export class ProfilComponent implements OnInit {

  fullName = '';
  email = '';
  historiqueCommandes: any[] = [];

  constructor(private router: Router, public auth: AuthService) {}

  ngOnInit(): void {
    if (!this.auth.isConnected) {
      this.router.navigate(['/login']);
      return;
    }

    const user: User | null = this.auth.getCurrentUser();
    if (user) {
      this.fullName = user.fullName;
      this.email = user.email;
      this.historiqueCommandes = user.historiqueCommandes || [];
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  getTotalCommande(commande: any): number {
    return commande.produits.reduce((total: number, p: any) => total + p.prix * p.quantite, 0);
  }
}
