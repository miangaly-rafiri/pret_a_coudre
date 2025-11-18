import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
     { path: '', component: AccueilComponent },
     { path: 'produits', component: ProduitsComponent },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'contact', component: ContactComponent },

];
