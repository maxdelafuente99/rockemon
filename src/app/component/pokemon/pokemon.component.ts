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
  pageSize: number = 12; // Tamaño de página
  pagesArray: number[] = [];
  selectedCharacter: any = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    const offset = (this.currentPage - 1) * this.pageSize;
    this.pokemonService.getCharacters(offset, this.pageSize).subscribe((data: any) => {
      console.log('Characters data:', data);
      this.characters = data.characters;
      this.totalPages = Math.ceil(data.count / this.pageSize);
      this.pagesArray = Array.from({ length: this.totalPages }, (_, index) => index + 1);
    });
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
      window.scrollTo(0, 0);
    }
  }

  openDetails(character: any): void {
    this.selectedCharacter = character;
  }

  closeDetails(): void {
    this.selectedCharacter = null;
  }
}
