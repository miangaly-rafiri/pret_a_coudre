import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier: any[] = [];

  constructor(private auth: AuthService) {
    this.loadPanier();
  }

  private getPanierKey(): string {
    return this.auth.isConnected && this.auth.currentUser
      ? `panier_user_${this.auth.currentUser.id}`
      : 'panier_guest';
  }

  private loadPanier() {
    const saved = localStorage.getItem(this.getPanierKey());
    this.panier = saved ? JSON.parse(saved) : [];
  }

  private savePanier() {
    localStorage.setItem(this.getPanierKey(), JSON.stringify(this.panier));
  }

  addProduit(produit: any): void {
    const item = this.panier.find(p => p.id === produit.id);
    if (item) {
      item.quantite += 1;
    } else {
      this.panier.push({ ...produit, quantite: 1 });
    }
    this.savePanier();
  }

  getPanier(): any[] {
    this.loadPanier();
    return [...this.panier];
  }

  removeProduit(id: number): void {
    this.panier = this.panier.filter(p => p.id !== id);
    this.savePanier();
  }

  decrementProduit(id: number): void {
    const itemIndex = this.panier.findIndex(p => p.id === id);
    if (itemIndex > -1) {
      this.panier[itemIndex].quantite -= 1;
      if (this.panier[itemIndex].quantite <= 0) {
        this.panier.splice(itemIndex, 1);
      }
    }
    this.savePanier();
  }

  clearPanier(): void {
    this.panier = [];
    this.savePanier();
  }

  getTotal(): number {
    return this.panier.reduce((sum, p) => sum + p.prix * p.quantite, 0);
  }
}
