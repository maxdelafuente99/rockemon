import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rickandmorty-character-detail',
  templateUrl: './rickandmorty-character-detail.component.html',
  styleUrls: ['./rickandmorty-character-detail.component.scss']
})
export class RickandmortyCharacterDetailComponent implements OnChanges {
  @Input() character: any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>(); // Definir el EventEmitter

  episodeCount: number = 0;
  firstAppearance: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['character'] && this['character']) {
      this.episodeCount = this['character'].episode.length;      
    }
  }

  closeModal(): void {
    this.close.emit(); // Emitir el evento para cerrar el modal
  }
}

