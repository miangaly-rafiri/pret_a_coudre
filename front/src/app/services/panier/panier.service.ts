import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: any[] = [];

  constructor() {}

  addProduit(produit: any): void {
    const item = this.panier.find(p => p.id === produit.id);
    if (item) {
      item.quantite += 1;
    } else {
      this.panier.push({ ...produit, quantite: 1 });
    }
  }

  getPanier(): any[] {
    return [...this.panier];
  }

  removeProduit(id: number): void {
    this.panier = this.panier.filter(p => p.id !== id);
  }

  decrementProduit(id: number): void {
    const itemIndex = this.panier.findIndex(p => p.id === id);
    if (itemIndex > -1) {
      this.panier[itemIndex].quantite -= 1;
      if (this.panier[itemIndex].quantite <= 0) {
        this.panier.splice(itemIndex, 1);
      }
    }
  }

  clearPanier(): void {
    this.panier = [];
  }

  getTotal(): number {
    return this.panier.reduce((sum, p) => sum + p.prix * p.quantite, 0);
  }
}