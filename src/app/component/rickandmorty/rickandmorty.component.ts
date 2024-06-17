import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/service/rick-morty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.scss']
})
export class RickandmortyComponent implements OnInit {
  characters: any[] = [];
  species: string[] = [];
  genders: string[] = [];
  statuses: string[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  selectedCharacter: any = null;
  statusFilter: string = '';
  speciesFilter: string = '';
  genderFilter: string = '';

  constructor(private apiService: RickMortyService) {}

  ngOnInit(): void {
    this.loadCharacters(this.currentPage);
    this.fetchUniqueValues();
  }

  loadCharacters(page: number): void {
    this.apiService.getAllData(page).subscribe(data => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
    });
  }

  fetchUniqueValues(): void {
    this.apiService.fetchAllCharacters().subscribe(characters => {
      this.genders = Array.from(new Set(characters.map((character: any) => character.gender)));
      this.species = Array.from(new Set(characters.map((character: any) => character.species)));
      this.statuses = Array.from(new Set(characters.map((character: any) => character.status)));
    });
  }
  
  applyFilters(status: string, species: string, gender: string): void {
    this.apiService.getFilteredData(this.currentPage, status, species, gender).subscribe(data => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
    });
  }

  clearFilters(): void {
    this.statusFilter = '';
    this.speciesFilter = '';
    this.genderFilter = '';
    this.loadCharacters(this.currentPage);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters(page);
      window.scrollTo(0, 0);
    }
  }

  getStatusIconClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'bi bi-heart-fill';
      case 'dead':
        return 'bi bi-heartbreak';
      default:
        return 'bi bi-question-circle';
    }
  }

  openDetails(character: any): void {
    this.selectedCharacter = character;
  }

  closeDetails(): void {
    this.selectedCharacter = null;
  }
}
