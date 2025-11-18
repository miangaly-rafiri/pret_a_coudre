import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produits',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent {

  produits = [
    { id: 1, nom: 'Tissu coton', categorie: 'coton', prix: 8 },
    { id: 2, nom: 'Tissu lin', categorie: 'lin', prix: 12 },
    { id: 3, nom: 'Tissu soie', categorie: 'soie', prix: 25 },
  ];

  filtreCategorie: string = '';
  filtrePrixMax: number | null = null;

  get produitsFiltres() {
    return this.produits.filter(p =>
      (!this.filtreCategorie || p.categorie === this.filtreCategorie) &&
      (!this.filtrePrixMax || p.prix <= this.filtrePrixMax)
    );
  }
}
