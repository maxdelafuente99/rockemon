import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poke-character-detail',
  templateUrl: './poke-character-detail.component.html',
  styleUrls: ['./poke-character-detail.component.scss']
})
export class PokeCharacterDetailComponent implements OnChanges {
  @Input() character: any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>(); // Definir el EventEmitter

  abilitiesList: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['character'] && this['character']) {
      this.abilitiesList = this.getAbilities();
      
    }
  }


  getAbilities(): string {
    return this.character.abilities.map((ability: any) => ability.ability.name).join(', ');
  }

  closeModal(): void {
    this.close.emit(); // Emitir el evento para cerrar el modal
  }
}
