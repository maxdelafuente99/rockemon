import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

 
  characters: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  pageSize: number = 10; // Tamaño de página
  pagesArray: number[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    const offset = (this.currentPage - 1) * this.pageSize;
    this.pokemonService.getCharacters(offset, this.pageSize).subscribe((data: any[]) => {
      console.log('Characters data:', data);
      this.characters = data;
      this.totalPages = Math.ceil(data.length / this.pageSize);
      this.pagesArray = Array.from({ length: this.totalPages }, (_, index) => index + 1);
    });
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
    }
  }
}
