import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SrvAuthService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getUserInfoFromToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwt_decode(token);  // Decode the token
      } catch (error) {
        console.error('Invalid token', error);
        return null;
      }
    }
    return null;
  }

  isSuperuser(): boolean {
    const decodedToken = this.getUserInfoFromToken();
    return decodedToken && decodedToken.is_superuser;
  }
}