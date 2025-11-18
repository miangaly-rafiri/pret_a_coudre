import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProduitsComponent } from './pages/produits/produits.component';

export const routes: Routes = [
     { path: '', component: AccueilComponent },
     { path: 'produit', component: ProduitsComponent },
];
