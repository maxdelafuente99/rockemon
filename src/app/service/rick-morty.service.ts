import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAllData(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?page=${page}`);
  }

  getFilteredData(page: number = 1, status?: string, species?: string, gender?: string): Observable<any> {
    let params = new HttpParams().set('page', page.toString());

    if (status) {
      params = params.set('status', status);
    }
    if (species) {
      params = params.set('species', species);
    }
    if (gender) {
      params = params.set('gender', gender);
    }

    return this.http.get<any>(`${this.apiUrl}`, { params });
  }

  fetchAllCharacters(): Observable<any> {
    let characters: any[] = [];
    let nextUrl = `${this.apiUrl}`;
    
    return new Observable(observer => {
      const fetchData = () => {
        this.http.get<any>(nextUrl).subscribe(
          response => {
            characters = characters.concat(response.results);
            nextUrl = response.info.next;
            if (nextUrl) {
              fetchData();
            } else {
              observer.next(characters);
              observer.complete();
            }
          },
          error => observer.error(error)
        );
      };
      
      fetchData();
    });
  }

  extractUniqueValues(characters: any[]): void {
    const genders = new Set<string>();
    const species = new Set<string>();
    const statuses = new Set<string>();

    characters.forEach(character => {
      genders.add(character.gender);
      species.add(character.species);
      statuses.add(character.status);
    });

    console.log("Genders:", Array.from(genders));
    console.log("Species:", Array.from(species));
    console.log("Statuses:", Array.from(statuses));
  }

  fetchAndLogUniqueValues(): void {
    this.fetchAllCharacters().subscribe(
      characters => {
        this.extractUniqueValues(characters);
      },
      error => {
        console.error('Error fetching characters:', error);
      }
    );
  }
}
