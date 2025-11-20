import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-accueil',
  standalone: true,           
  imports: [CarouselComponent, CommonModule],  
  templateUrl: './accueil.component.html',
  styleUrls:['./accueil.component.scss']
})
export class AccueilComponent {

noms = [
  { name: 'Coton' },
  { name: 'Lin' },
  { name: 'Soie' },
  { name: 'Laine' },
  { name: 'Velours' },
  { name: 'Satin' },
  { name: 'Mousseline' },
  { name: 'Denim' },
  { name: 'Cachemire' },
  { name: 'Taffetas' },
  { name: 'Jersey' }
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



// import { Component, AfterViewInit } from '@angular/core';
// import { CarouselComponent } from '../carousel/carousel.component';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-accueil',
//   standalone: true,           
//   imports: [CarouselComponent, CommonModule],  
//   templateUrl: './accueil.component.html',
//   styleUrls:['./accueil.component.scss']
// })
// export class AccueilComponent implements AfterViewInit {

//   noms = [
//     { name: 'Coton' }, { name: 'Lin' }, { name: 'Soie' },
//     { name: 'Laine' }, { name: 'Velours' }, { name: 'Satin' },
//     { name: 'Mousseline' }, { name: 'Denim' }, { name: 'Cachemire' },
//     { name: 'Taffetas' }, { name: 'Jersey' }
//   ];

//   currentIndex = 0;

//   constructor(private router: Router) {
//     this.startRotation();
//   }

//   ngAfterViewInit(): void {
//     const chatbotBtn = document.getElementById("chatbot-btn")!;
//     const chatbotWindow = document.getElementById("chatbot-window")!;
//     const closeChatbot = document.getElementById("close-chatbot")!;
//     const chatbotInput = document.getElementById("chatbot-input") as HTMLInputElement;
//     const chatbotSend = document.getElementById("chatbot-send")!;
//     const chatbotMessages = document.getElementById("chatbot-messages")!;

//     chatbotBtn.addEventListener("click", () => {
//       chatbotWindow.classList.toggle("hidden");
//     });

//     closeChatbot.addEventListener("click", () => {
//       chatbotWindow.classList.add("hidden");
//     });

//     const sendMessage = () => {
//       const text = chatbotInput.value.trim();
//       if (!text) return;

//       const userMsg = document.createElement("p");
//       userMsg.className = "text-right text-[#A6563F] font-semibold mb-1";
//       userMsg.textContent = `Vous : ${text}`;
//       chatbotMessages.appendChild(userMsg);

//       chatbotInput.value = "";
//       chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

//       setTimeout(() => {
//         const botMsg = document.createElement("p");
//         botMsg.className = "text-gray-700 mb-1";
//         botMsg.textContent = "🤖 Je suis un assistant statique. Pour le moment, je ne peux que répondre automatiquement 😊";
//         chatbotMessages.appendChild(botMsg);
//         chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
//       }, 600);
//     };

//     chatbotSend.addEventListener("click", sendMessage);
//     chatbotInput.addEventListener("keypress", e => {
//       if (e.key === "Enter") sendMessage();
//     });
//   }

//   startRotation() {
//     setInterval(() => {
//       this.currentIndex = (this.currentIndex + 1) % this.noms.length;
//     }, 10000);
//   }

//   goToMaterial() { this.router.navigate(['/tissus']); }
//   goToProduits() { this.router.navigate(['/produits']); }
// }

