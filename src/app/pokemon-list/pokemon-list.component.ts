import { Component, OnInit } from "@angular/core";
import { PokemonService } from '../services/pokemon-service';
import { Pokemon } from '../models/pokemon.model';
import { PokemonHttpService } from "../services/pokemon-http-service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
 
  public pokemonSelected!: Pokemon;
  public isFormOpen = false;
  public isPreviewOpen = false;

  private MAX_POKEMONS:number = 25;

  get filteredPokemons() {
    return this.pokemonService.filteredPokemons;
  }

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon(this.MAX_POKEMONS);
  }

  pokemonFilter(value: string) {
    this.pokemonService.pokemonFilter(value);
  }

  resetPokemonData() {
    this.pokemonService.getPokemon(this.MAX_POKEMONS);
  }

  openPreview(pokemon: Pokemon) {
    this.pokemonSelected = pokemon;
    this.isPreviewOpen = true;
  }

  openForm(pokemon: Pokemon) {
    this.pokemonSelected = pokemon;
    this.isFormOpen = true;
  }

  onDialogStateChange(windowOpenState: boolean){
    this.isPreviewOpen = windowOpenState;
    this.isFormOpen = windowOpenState;
  }
}
