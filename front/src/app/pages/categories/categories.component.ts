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
    { nom: 'coton', image: 'assets/images/coton/coton-violet.jpg', description: 'Tissus doux et légers.' },
    { nom: 'lin', image: 'assets/images/lin/tissu-lin.jpg', description: 'Fibres naturelles respirantes.' },
    { nom: 'soie', image: 'assets/images/soie/soie-rose.jpeg', description: 'Tissu luxueux et élégant.' },
    { nom: 'velours', image: 'assets/images/velours/velour-cottele.jpg', description: 'Texture douce et raffinée.' },
    { nom: 'laine', image: 'assets/images/laine/tissu-laine.jpg', description: 'Idéal pour la chaleur et le confort.' },
    { nom: 'Polyester', image: 'assets/images/polyester/tissu-poly.jpg', description: 'Très résistant et durable.' },
    { nom: 'cuire', image: 'assets/images/cuir/tiddu-cuiR.jpg', description: 'Cuir épais pour maroquinerie.' },
  ];

  produits = [
  { id: 1, nom: 'Coton blanc', categorie: 'coton', prix: 8, image: 'assets/images/coton/tissu-coton.webp', note: 4, couleur: '#ffffff' },
  { id: 2, nom: 'Coton imprimé', categorie: 'coton', prix: 10, image: 'assets/images/coton/coton-imprime.webp', note: 5, couleur: '#f5e1d3' },
  { id: 3, nom: 'Lin beige', categorie: 'lin', prix: 12, image: 'assets/images/lin/lin-beige.jpg', note: 3, couleur: '#e0c8a0' },
  { id: 4, nom: 'Lin gris', categorie: 'lin', prix: 16, image: 'assets/images/lin/tissu-lin.webp', note: 4, couleur: '#b0b0b0' },
  { id: 5, nom: 'Soie fine rose', categorie: 'soie', prix: 25, image: 'assets/images/soie/soie-fleure.webp', note: 5, couleur: '#f4c2c2' },
  { id: 6, nom: 'Soie royale bleu ciel', categorie: 'soie', prix: 40, image: 'assets/images/soie/soie-bleuciel.jpg', note: 5, couleur: '#87ceeb' },
  { id: 7, nom: 'Velours épais', categorie: 'velours', prix: 18, image: 'assets/images/velours/velours-bleu.webp', note: 4, couleur: '#1e3a8a' },
  { id: 8, nom: 'Velours léger', categorie: 'velours', prix: 14, image: 'assets/images/velours/velours-rouge.jpg', note: 3, couleur: '#b91c1c' },
  { id: 9, nom: 'Laine chaude orange', categorie: 'laine', prix: 22, image: 'assets/images/laine/laine-orange.jpg', note: 4, couleur: '#f97316' },
  { id: 10, nom: 'Laine mérinos verte', categorie: 'laine', prix: 30, image: 'assets/images/laine/laine-verte.jpg', note: 5, couleur: '#16a34a' },
  { id: 11, nom: 'Polyester blanc', categorie: 'Polyester', prix: 30, image: 'assets/images/polyester/polyester-blanc.jpg', note: 3, couleur: '#f3f4f6' },
  { id: 12, nom: 'Polyester imprimé minimaliste', categorie: 'Polyester', prix: 30, image: 'assets/images/polyester/polyester-imprime.jpg', note: 2, couleur: '#d1d5db' },
  { id: 13, nom: 'Cuire or', categorie: 'cuire', prix: 30, image: 'assets/images/cuir/cuir-or.avif', note: 4, couleur: '#d4af37' },
  { id: 14, nom: 'Cuire marron', categorie: 'cuire', prix: 30, image: 'assets/images/cuir/cuire-marron.jpg', note: 5, couleur: '#7b3f00' }
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
