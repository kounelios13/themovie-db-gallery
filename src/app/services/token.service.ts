import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string | null = null;
  constructor() { 

    const token = localStorage.getItem('api-token');
    if (token) {
      this.token = token;
    }

  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('api-token', token);
  }
  getToken(): string | null {
    return this.token;
  }
}
