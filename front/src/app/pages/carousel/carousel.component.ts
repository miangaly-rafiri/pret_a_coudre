import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements OnInit, OnDestroy {
  images = [
  'assets/images/carousel/tissucomplet.jpg',
  'assets/images/carousel/filacoudre.jpg',
  'assets/images/carousel/coudre.jpg'
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startAutoplay() {
    this.intervalId = setInterval(() => this.next(), 3000);
  }
}
