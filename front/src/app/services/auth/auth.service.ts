import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isConnected = false;

  constructor() {
    // Charger l'état sauvegardé
    const saved = localStorage.getItem('isConnected');
    this._isConnected = saved === 'true';
  }

  // -------- Getter --------
  get isConnected(): boolean {
    return this._isConnected;
  }

  // -------- Setter --------
  set isConnected(value: boolean) {
    this._isConnected = value;
    localStorage.setItem('isConnected', value.toString());
  }

  // -------- Fonctions pratiques --------

  login() {
    this.isConnected = true;
  }

  logout() {
    this.isConnected = false;
  }
}
