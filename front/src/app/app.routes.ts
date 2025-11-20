import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProduitSeulComponent } from './pages/produit-seul/produit-seul.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { PanierComponent } from './pages/panier/panier.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProfilComponent } from './pages/profil/profil.component';

export const routes: Routes = [
     { path: '', component: AccueilComponent },
     { path: 'produits', component: ProduitsComponent },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'contact', component: ContactComponent },
     { path: 'produit-seul/:id', component: ProduitSeulComponent },
     { path: 'apropos', component: AproposComponent },
     { path: 'panier', component: PanierComponent },
     { path: 'categories', component: CategoriesComponent },
     { path: 'payment', component: PaymentComponent },
     { path: 'profil', component: ProfilComponent },

];
