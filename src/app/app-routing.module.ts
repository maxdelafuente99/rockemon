import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { RickandmortyComponent } from './component/rickandmorty/rickandmorty.component';
import { FullComponent } from './layouts/full/full.component';
export const Approutes: Routes = [
  {
    path: '',
    component: HomeComponent, // Cargar HomeComponent en la ruta vacía
    pathMatch: 'full' // Asegurarse de que coincide exactamente con el path vacío
  },
  {
    path: 'inicio',
    component: FullComponent,
    children: [
      {
        path: 'pokemon',
        component: PokemonComponent
      },
      {
        path: 'rickandmorty',
        component: RickandmortyComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
