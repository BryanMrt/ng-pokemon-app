import { Component } from '@angular/core';
// import { POKEMONS } from './mock-pokemon-list';
// import { Pokemon } from './pokemon';

@Component ({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent  { //implements OnInit

  // pokemonList: Pokemon[] = POKEMONS;
  // pokemonSelected: Pokemon|undefined;

  // ngOnInit() {
  //   console.table(this.pokemonList);
  // }

  // selectPokemon(pokemonId: string) {
  //   const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
  //   if(pokemon) {
  //     console.log(`Vous demandé le pokémon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   } else {
  //     console.log(`Vous avez demandé un pokemon qui n'éxiste pas`);
  //     this.pokemonSelected = pokemon;
  //   }
  // }

}
