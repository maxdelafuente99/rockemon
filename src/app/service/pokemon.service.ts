import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getCharacters(offset: number = 0, limit: number = 10): Observable<any> {
    const url = `${this.apiUrl}?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(url).pipe(
      switchMap(response => {
        const count = response.count;
        const detailedRequests = response.results.map((result: any) => this.http.get(result.url));
        return forkJoin(detailedRequests).pipe(
          map(characters => ({
            characters,
            count
          }))
        );
      })
    );
  }
}
