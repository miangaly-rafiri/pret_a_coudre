import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../services/panier/panier.service';

@Component({
  selector: 'app-produit-seul',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit-seul.component.html',
  styleUrls: ['./produit-seul.component.scss']
})
export class ProduitSeulComponent {

  produit: any;

  success = '';

  clearMessages = () => {
    setTimeout(() => {
      this.success = '';
    }, 1500);
  };

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
  { id: 11, nom: 'Polyester blanc', categorie: 'polyester', prix: 30, image: 'assets/images/polyester/polyester-blanc.jpg', note: 3, couleur: '#f3f4f6' },
  { id: 12, nom: 'Polyester imprimé minimaliste', categorie: 'polyester', prix: 30, image: 'assets/images/polyester/polyester-imprime.jpg', note: 2, couleur: '#d1d5db' },
  { id: 13, nom: 'Cuire or', categorie: 'cuire', prix: 30, image: 'assets/images/cuir/cuir-or.avif', note: 4, couleur: '#d4af37' },
  { id: 14, nom: 'Cuire marron', categorie: 'cuire', prix: 30, image: 'assets/images/cuir/cuire-marron.jpg', note: 5, couleur: '#7b3f00' }
];

  constructor(private route: ActivatedRoute, private router: Router, private panierService: PanierService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produit = this.produits.find(p => p.id === id);
  }

  ajouterAuPanier() {
    if (!this.produit) return;
    this.panierService.addProduit(this.produit);
    this.success = 'Produit ajouté au panier avec succès !';
    this.clearMessages();
  }

  retour() {
    this.router.navigate(['/produits']);
  }
  panier() {
    this.router.navigate(['/panier']);
  }
}
