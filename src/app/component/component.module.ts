import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';


@NgModule({
  imports: [
    CommonModule, RickandmortyComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdpaginationBasicComponent,        
  ],
  declarations: [      
    PokemonComponent,
            RickandmortyComponent
  ],
})
export class ComponentsModule { }
