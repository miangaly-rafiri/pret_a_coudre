import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { ProduitSeulComponent } from './pages/produit-seul/produit-seul.component';

export const routes: Routes = [
     { path: '', component: AccueilComponent },
     { path: 'produits', component: ProduitsComponent },
     { path: 'produit-seul/:id', component: ProduitSeulComponent },

];
