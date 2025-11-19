import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-profil',
standalone: true,
imports: [CommonModule, RouterLink, FormsModule],
templateUrl: './profil.component.html',
styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

fullName = '';
email = 'test@gmail.com';
showModal = false;
tempName = '';

constructor(private router: Router, public auth: AuthService) {}

ngOnInit(): void {
const storedName = localStorage.getItem('userFullName');
if (storedName) {
this.fullName = storedName;
} else {
this.showModal = true;
}
}

logout() {
this.auth.logout();
this.router.navigate(['/login']);
}
}
