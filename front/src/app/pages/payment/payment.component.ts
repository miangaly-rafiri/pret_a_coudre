import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../services/panier/panier.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  produits: any[] = [];
  total = 0;

  err = '';
  success = '';

  paymentForm!: FormGroup;

  clearMessages = () => {
    setTimeout(() => {
      this.err = '';
      this.success = '';
    }, 1500);
  };

  constructor(
    private panierService: PanierService,
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.produits = this.panierService.getPanier();
    this.total = this.panierService.getTotal();

    // Un seul formulaire pour toute la page
    this.paymentForm = this.fb.group({
      nom: [''],
      rue: [''],
      ville: [''],
      codePostal: [''],
      pays: [''],

      paiement: ['cb'], // Par défaut CB

      // Champs carte bancaire
      cardNumber: [''],
      expiration: [''],
      cvv: [''],
      cardName: [''],
    });
  }

  validerPaiement() {
    if (this.paymentForm.invalid) {
      this.err = 'Veuillez remplir correctement les champs.';
      this.clearMessages();
      return;
    }

    console.log("Formulaire complet :", this.paymentForm.value);
    console.log("Produits :", this.produits);
    console.log("Total :", this.total);

    this.success = "Paiement réussi ! Merci pour votre achat.";
    this.clearMessages();
    this.panierService.clearPanier();
    setTimeout(() => {
      if (this.auth.isConnected) {
        this.router.navigate(['/profil']);
      } else {
        this.router.navigate(['/']);
      }
    }, 2000);
  }
}
