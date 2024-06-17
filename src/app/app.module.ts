import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RickandmortyComponent } from './component/rickandmorty/rickandmorty.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { RickandmortyCharacterDetailComponent } from './component/rickandmorty-character-detail/rickandmorty-character-detail.component';
import { PokeCharacterDetailComponent } from './component/poke-character-detail/poke-character-detail.component';



@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,   
    RickandmortyComponent,
    PokemonComponent,
    RickandmortyCharacterDetailComponent,
    PokeCharacterDetailComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    FullComponent,
    SidebarComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
