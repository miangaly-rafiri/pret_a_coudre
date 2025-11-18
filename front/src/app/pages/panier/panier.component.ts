import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  panier: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Récupérer le panier depuis le localStorage
    const panierStorage = localStorage.getItem('panier');
    if (panierStorage) {
      this.panier = JSON.parse(panierStorage);
    }
  }

  retour() {
    this.router.navigate(['/produits']);
  }

  supprimerProduit(index: number) {
    this.panier.splice(index, 1);
    localStorage.setItem('panier', JSON.stringify(this.panier));
  }

  getTotal() {
    return this.panier.reduce((acc, p) => acc + p.prix, 0);
  }
}
