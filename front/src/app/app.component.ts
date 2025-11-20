// import { Component, HostListener } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from "./shared/navbar/navbar.component";
// import { FooterComponent } from "./shared/footer/footer.component";
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
  
//   showScrollTopButton = false;

//   @HostListener('window:scroll')
//   onScroll() {
//     this.showScrollTopButton = window.scrollY > 300;
//   }

//   scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }
// }

import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  
  showScrollTopButton = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTopButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    const chatbotBtn = document.getElementById("chatbot-btn")!;
    const chatbotWindow = document.getElementById("chatbot-window")!;
    const closeChatbot = document.getElementById("close-chatbot")!;
    const chatbotInput = document.getElementById("chatbot-input") as HTMLInputElement;
    const chatbotSend = document.getElementById("chatbot-send")!;
    const chatbotMessages = document.getElementById("chatbot-messages")!;

    chatbotBtn.addEventListener("click", () => {
      chatbotWindow.classList.toggle("hidden");
    });

    closeChatbot.addEventListener("click", () => {
      chatbotWindow.classList.add("hidden");
    });

    const sendMessage = () => {
      const text = chatbotInput.value.trim();
      if (!text) return;

      const userMsg = document.createElement("p");
      userMsg.className = "text-right text-[#A6563F] font-semibold mb-1";
      userMsg.textContent = `Vous : ${text}`;
      chatbotMessages.appendChild(userMsg);

      chatbotInput.value = "";
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

      setTimeout(() => {
        const botMsg = document.createElement("p");
        botMsg.className = "text-gray-700 mb-1";
        botMsg.textContent = "🤖 Je suis un assistant statique. Pour le moment, je ne peux que répondre automatiquement 😊";
        chatbotMessages.appendChild(botMsg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 600);
    };

    chatbotSend.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", e => {
      if (e.key === "Enter") sendMessage();
    });
  }
}
