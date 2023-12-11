import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken: any

  constructor(private router: Router) { this.decodeToken() }

  decodeToken() {
    try {
      const token = localStorage.getItem('token') as string;
      if (token) {
        this.decodedToken = jwtDecode(token);

      }
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

    this.router.navigate(['']);
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
