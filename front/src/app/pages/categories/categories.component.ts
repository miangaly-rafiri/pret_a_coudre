import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  constructor(private router: Router) { }
  categories = [
    { nom: 'coton', image: 'assets/images/tissu-coton.webp', description: 'Tissus doux et légers.' },
    { nom: 'lin', image: 'assets/images/logo4.jpg', description: 'Fibres naturelles respirantes.' },
    { nom: 'soie', image: 'assets/images/tissu-lin.webp', description: 'Tissu luxueux et élégant.' },
    { nom: 'velours', image: 'assets/images/tissu-lin.webp', description: 'Texture douce et raffinée.' },
    { nom: 'laine', image: 'assets/images/tissu-lin.webp', description: 'Idéal pour la chaleur et le confort.' },
    { nom: 'Polyester 1', image: 'assets/images/tissu-lin.webp', description: 'Synthétique polyvalent.' },
    { nom: 'Polyester 2', image: 'assets/images/tissu-lin.webp', description: 'Très résistant et durable.' },
    { nom: 'cuire 1', image: 'assets/images/tissu-lin.webp', description: 'Cuir épais pour maroquinerie.' },
    { nom: 'cuire 2', image: 'assets/images/tissu-lin.webp', description: 'Cuir souple pour vêtements.' }
  ];

  produits = [
    { id: 1, nom: 'Tissu coton blanc', categorie: 'coton', prix: 8, image: 'assets/images/tissu-coton.webp' },
    { id: 2, nom: 'Tissu coton imprimé', categorie: 'coton', prix: 10, image: 'assets/images/tissu-coton.webp' },
    { id: 3, nom: 'Tissu lin beige', categorie: 'lin', prix: 12, image: 'assets/images/tissu-coton.webp' },
    { id: 4, nom: 'Tissu lin premium', categorie: 'lin', prix: 16, image: 'assets/images/tissu-coton.webp' },
    { id: 5, nom: 'Tissu soie fine', categorie: 'soie', prix: 25, image: 'assets/images/tissu-coton.webp' },
    { id: 6, nom: 'Tissu soie royale', categorie: 'soie', prix: 40, image: 'assets/images/tissu-coton.webp' },
    { id: 7, nom: 'Velours épais', categorie: 'velours', prix: 18, image: 'assets/images/tissu-coton.webp' },
    { id: 8, nom: 'Velours léger', categorie: 'velours', prix: 14, image: 'assets/images/tissu-coton.webp' },
    { id: 9, nom: 'Laine chaude', categorie: 'laine', prix: 22, image: 'assets/images/tissu-coton.webp' },
    { id: 10, nom: 'Laine mérinos', categorie: 'laine', prix: 30, image: 'assets/images/tissu-coton.webp' },
    { id: 11, nom: 'Polyester 1', categorie: 'Polyester 1', prix: 30, image: 'assets/images/tissu-coton.webp' },
    { id: 12, nom: 'Polyester 2', categorie: 'Polyester 2', prix: 30, image: 'assets/images/tissu-coton.webp' },
    { id: 13, nom: 'Cuire 1', categorie: 'cuire 1', prix: 30, image: 'assets/images/tissu-coton.webp' },
    { id: 14, nom: 'Cuire 2', categorie: 'cuire 2', prix: 30, image: 'assets/images/tissu-coton.webp' },
  ];

  modalVisible = false;
  produitsCategorie: any[] = [];
  titreCategorie = '';

  ouvrirModalCategorie(categorie: string) {
    this.produitsCategorie = this.produits.filter(
      p => p.categorie.toLowerCase() === categorie.toLowerCase()
    );

    this.titreCategorie = categorie;
    this.modalVisible = true;
  }

  fermerModal() {
    this.modalVisible = false;
  }

  ouvrirProduit(id: number) {
    this.router.navigate(['/produit-seul', id]);
  }

}
