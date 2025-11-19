import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanierService } from '../../services/panier/panier.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
    }, 2000);
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

    this.paymentForm = this.fb.group({
      nom: ['', Validators.required],
      rue: ['', Validators.required],
      ville: ['', Validators.required],
      codePostal: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      pays: ['', Validators.required],

      paiement: ['cb', Validators.required],

      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiration: ['', Validators.required], // on pourra transformer en MM/AA avec custom validator
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      cardName: ['', Validators.required],
    });
  }

  validerPaiement() {
    if (this.paymentForm.invalid) {
      this.err = 'Veuillez remplir correctement les champs.';
      this.clearMessages();
      return;
    }

    const nouvelleCommande = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      produits: [...this.produits]
    };

    if (this.auth.isConnected && this.auth.currentUser) {
      this.auth.addCommande(this.auth.currentUser.id, nouvelleCommande);
    }

    this.success = "Paiement réussi ! Merci pour votre achat.";
    this.clearMessages();

    this.panierService.clearPanier();

    setTimeout(() => {
      if (this.auth.isConnected) {
        this.router.navigate(['/profil']).then(() => window.scrollTo(0, 0));
      } else {
        this.router.navigate(['/']).then(() => window.scrollTo(0, 0));
      }
    }, 2500);
  }

}