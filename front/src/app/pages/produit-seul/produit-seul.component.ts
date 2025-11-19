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
  panier () {
    this.router.navigate(['/panier']);
  }
}
