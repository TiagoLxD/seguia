import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken: any

  constructor() { this.decodeToken() }

  decodeToken() {
    try {
      const token = localStorage.getItem('token') as string;
      this.decodedToken = jwtDecode(token);
    } catch (error) {
      console.error('Erro ao decodificar o token JWT:', error);
    }
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    this.decodeToken()
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
  }

  get getCliente(): string {
    return this.decodedToken.cliente
  }

  isUserAdmin() {
    return true;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
