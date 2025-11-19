import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../services/panier/panier.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  produits: any[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.refreshPanier();
  }

  refreshPanier() {
    this.produits = this.panierService.getPanier();
  }

  supprimer(id: number) {
    this.panierService.removeProduit(id);
    this.refreshPanier(); // rafraîchit la liste
  }

  decrement(id: number) {
    this.panierService.decrementProduit(id);
    this.refreshPanier(); // rafraîchit la liste
  }

  viderPanier() {
    this.panierService.clearPanier();
    this.refreshPanier();
  }

  total() {
    return this.panierService.getTotal();
  }
}
