import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent {

  constructor(private router: Router) {}

  produits = [
    { id: 1, nom: 'Tissu coton blanc',   categorie: 'coton',   prix: 8,  image: 'assets/images/tissu-coton.webp' },
    { id: 2, nom: 'Tissu coton imprimé', categorie: 'coton',   prix: 10, image: 'assets/images/tissu-coton.webp' },
    { id: 3, nom: 'Tissu lin beige',     categorie: 'lin',     prix: 12, image: 'assets/images/tissu-coton.webp' },
    { id: 4, nom: 'Tissu lin premium',   categorie: 'lin',     prix: 16, image: 'assets/images/tissu-coton.webp' },
    { id: 5, nom: 'Tissu soie fine',     categorie: 'soie',    prix: 25, image: 'assets/images/tissu-coton.webp' },
    { id: 6, nom: 'Tissu soie royale',   categorie: 'soie',    prix: 40, image: 'assets/images/tissu-coton.webp' },
    { id: 7, nom: 'Velours épais',       categorie: 'velours', prix: 18, image: 'assets/images/tissu-coton.webp' },
    { id: 8, nom: 'Velours léger',       categorie: 'velours', prix: 14, image: 'assets/images/tissu-coton.webp' },
    { id: 9, nom: 'Laine chaude',        categorie: 'laine',   prix: 22, image: 'assets/images/tissu-coton.webp' },
    { id: 10, nom: 'Laine mérinos',      categorie: 'laine',   prix: 30, image: 'assets/images/tissu-coton.webp' },
  ];

  filtreCategorie: string = '';
  filtrePrixMax: number | null = null;
  tri: string = 'nom-asc';

ouvrirProduit(id: number) {
  this.router.navigate(['/produit-seul', id]);
}

  get produitsFiltres() {
    let produits = this.produits.filter(p =>
      (!this.filtreCategorie || p.categorie === this.filtreCategorie) &&
      (!this.filtrePrixMax || p.prix <= this.filtrePrixMax)
    );

    switch (this.tri) {
      case 'nom-asc': produits.sort((a, b) => a.nom.localeCompare(b.nom)); break;
      case 'nom-desc': produits.sort((a, b) => b.nom.localeCompare(a.nom)); break;
      case 'prix-asc': produits.sort((a, b) => a.prix - b.prix); break;
      case 'prix-desc': produits.sort((a, b) => b.prix - a.prix); break;
    }

    return produits;
  }
}
