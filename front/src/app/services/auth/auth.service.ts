import { Injectable } from '@angular/core';
import usersData from '../../data/users.json';

export interface Produit {
  id: number;
  nom: string;
  categorie: string;
  prix: number;
  quantite: number;
  image: string;
}

export interface Commande {
  id: number;
  date: string;
  produits: Produit[];
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  historiqueCommandes?: Commande[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [];
  private _isConnected = false;
  private _currentUser: User | null = null;

  constructor() {
    this.loadUsers();
    this.loadSession();
  }


  private loadUsers() {
    const savedUsers = localStorage.getItem('users');
    this.users = savedUsers ? JSON.parse(savedUsers) : usersData;
    this.users = this.users.map(u => ({
      ...u,
      historiqueCommandes: u.historiqueCommandes ?? []
    }));
  }

  private loadSession() {
    const saved = localStorage.getItem('isConnected');
    this._isConnected = saved === 'true';

    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this._currentUser = JSON.parse(savedUser);
    }
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  get isConnected(): boolean {
    return this._isConnected;
  }

  get currentUser(): User | null {
    return this._currentUser;
  }

  getCurrentUser(): User | null {
    return this._currentUser;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      this.logout();
      return false;
    }

    this._isConnected = true;
    this._currentUser = user;

    localStorage.setItem('isConnected', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));

    return true;
  }


  logout() {
    this._isConnected = false;
    this._currentUser = null;
    localStorage.removeItem('isConnected');
    localStorage.removeItem('currentUser');
  }


  register(fullName: string, email: string, password: string): boolean {
    const exists = this.users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) return false;

    const newUser: User = {
      id: this.users.length + 1,
      fullName,
      email,
      password,
      historiqueCommandes: []
    };

    this.users.push(newUser);
    this.saveUsers();

    return true;
  }

  addCommande(userId: number, commande: Commande) {
    const user = this.users.find(u => u.id === userId);
    if (!user) return;

    if (!Array.isArray(user.historiqueCommandes)) {
      user.historiqueCommandes = [];
    }

    user.historiqueCommandes.push(commande);

    this.saveUsers();

    if (this._currentUser && this._currentUser.id === userId) {
      this._currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }
}
