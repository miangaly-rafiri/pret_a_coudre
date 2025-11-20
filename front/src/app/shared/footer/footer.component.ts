import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showFooter = false;
  lastScroll = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || window.pageYOffset;

    if (currentScroll > this.lastScroll && currentScroll > 100) {
      // Si on descend et qu’on a scrollé au moins 100px
      this.showFooter = true;
    } else if (currentScroll < this.lastScroll) {
      // Si on remonte
      this.showFooter = false;
    }

    this.lastScroll = currentScroll;
  }
}
