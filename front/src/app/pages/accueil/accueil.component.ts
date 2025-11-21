import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CarouselComponent, CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  noms = [
    { name: 'Coton', id: 1 },
    { name: 'Lin', id: 2 },
    { name: 'Soie', id: 3 },
    { name: 'Laine', id: 4 },
    { name: 'Polyester', id: 5 },
    { name: 'cuir', id: 5 },
    { name: 'velours', id: 5 },
  ];

  currentIndex = 0;

  constructor(private router: Router) {
    this.startRotation();
  }

  startRotation() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.noms.length;
    }, 10000);
  }

  goToMaterial() {
    this.router.navigate(['/tissus']);
  }

goToProduits() {
  this.router.navigate(['/produits']);
}

}