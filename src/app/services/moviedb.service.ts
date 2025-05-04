import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private httpClient = inject(HttpClient);
  private tokenSrv = inject(TokenService);
  constructor() { }

  searchMovie(query : string) : any{
    const url = `${this.baseUrl}/search/movie?query=${query}`;
    return this.httpClient.get(url, {
      headers: {
        'Authorization': `Bearer ${this.tokenSrv.getToken()}`
      }
    });
  }
}
