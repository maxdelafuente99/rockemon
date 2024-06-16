import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/service/rick-morty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.scss']
})
export class RickandmortyComponent implements OnInit {
  characters: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private apiService: RickMortyService) {}

  ngOnInit(): void {
    this.loadCharacters(this.currentPage);
  }

  loadCharacters(page: number): void {
    this.apiService.getAllData(page).subscribe(data => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
    });
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters(page);
    }
  }
}
