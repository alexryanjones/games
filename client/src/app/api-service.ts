import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './types';

const API_URL = 'http://localhost:4000';
const games = "/games";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  searchGames(query: string): Observable<Game[]> {
    const params = { title: query };
    return this.http.get<Game[]>(API_URL + games, { params });
  }
}
