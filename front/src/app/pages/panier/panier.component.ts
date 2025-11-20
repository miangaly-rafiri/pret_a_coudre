import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../services/panier/panier.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PromoService } from '../../services/promo/promo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  produits: any[] = [];
  promoCode: string = '';
  promoApplied: any = null;

  err = '';
  success = '';

  constructor
    (
      private panierService: PanierService,
      private promoService: PromoService
    ) { }

  ngOnInit(): void {
    this.refreshPanier();
    const savedPromo = localStorage.getItem('promo_code');
    if (savedPromo) {
      const promo = this.promoService.getPromo(savedPromo);
      if (promo) {
        this.promoApplied = promo;
        this.promoCode = promo.code; // met à jour le champ input
      } else {
        localStorage.removeItem('promo_code'); // code invalide
      }
    }
  }


  clearMessages = () => {
    setTimeout(() => {
      this.err = '';
      this.success = '';
    }, 2000);
  };

  refreshPanier() {
    this.produits = this.panierService.getPanier();
  }

  supprimer(id: number) {
    this.panierService.removeProduit(id);
    this.success = 'Produit supprimé du panier.';
    this.clearMessages();
    this.refreshPanier();

  }

  decrement(id: number) {
    this.panierService.decrementProduit(id);
    this.refreshPanier();
    this.success = 'Quantité mise à jour.';
    this.clearMessages();
  }

  viderPanier() {
    this.panierService.clearPanier();
    this.refreshPanier();
    localStorage.removeItem('promo_code');
    this.success = 'Panier vidé.';
    this.clearMessages();
  }

  totalFinal() {
    let total = this.panierService.getTotal();

    if (this.promoApplied) {
      if (this.promoApplied.discountType === 'percent') {
        total -= total * (this.promoApplied.value / 100);
      } else if (this.promoApplied.discountType === 'fixed') {
        total -= this.promoApplied.value;
      } else if (this.promoApplied.discountType === 'shipping') {
        total -= this.promoApplied.value;
      }
    }

    return total < 0 ? 0 : total;
  }


  applyPromo() {
    const promo = this.promoService.getPromo(this.promoCode);

    if (!promo) {
      this.err = "Code promo invalide.";
      this.clearMessages();
      return;
    }

    this.promoApplied = promo;
    localStorage.setItem('promo_code', promo.code);
    this.success = `Code promo "${promo.code}" appliqué !`;
    this.clearMessages();
  }
}
