import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private apiUrl = 'https://api.jikan.moe/v3/';

  constructor(private http: HttpClient) {}

  getTopAnime(): Observable<any> {
    const url = `${this.apiUrl}top/anime/1/tv`;
    return this.http.get<any>(url);
  }

  searchAnime(search: string): Observable<any> {
    const url = `${this.apiUrl}search/anime?q=${search}=1`;
    return this.http.get<any>(url);
  }

  getAnimeDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}anime/${id}`;
    return this.http.get<any>(url);
  }
}
