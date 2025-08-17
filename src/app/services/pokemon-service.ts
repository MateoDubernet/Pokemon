import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonHttpService } from './pokemon-http-service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons!: Pokemon[];
  public filteredPokemons!: Pokemon[];

  public types!: string[];
  public filteredTypes!: string[];

  private maximumTypes: number = 20;

  constructor(private pokemonHttpService: PokemonHttpService) {}

  getPokemon(limit: number) {
    this.pokemonHttpService.getPokemonlist(limit).subscribe(async pokemons => {
      this.pokemons = [];

      for (let i = 0; i < pokemons.results.length; i++) {
        const pokemonRes = pokemons.results[i];
        const pokedex = await lastValueFrom(this.pokemonHttpService.getPokemonByName(pokemonRes.name));

        if (pokedex !== undefined) {
          const pokemonTypes = [];
          for (let i = 0; i < pokedex.types.length; i++) {
            const types = pokedex.types[i].type?.name;
            pokemonTypes.push(types);
          }

          const pokemonStatsName = [];
          const pokemonBaseStats = [];
          for (let i = 0; i < pokedex.stats.length; i++) {
            const statName = pokedex.stats[i].stat.name;
            const baseStat = pokedex.stats[i].base_stat;

            pokemonBaseStats.push(baseStat);
            pokemonStatsName.push(statName);
          }

          const pokemonAbilities = [];
          const pokemonHiddenAbilities = [];
          for (let i = 0; i < pokedex.abilities.length; i++) {
            const abilityName = pokedex.abilities[i];

            if (!abilityName.is_hidden) {
              pokemonAbilities.push(abilityName.ability.name);
            } else {
              pokemonHiddenAbilities?.push(abilityName.ability.name);
            }
          }

          const pokemon: Pokemon = {
            name: pokedex.name,
            id: pokedex.id,
            height: pokedex.height / 10,
            weight: pokedex.weight / 10,
            spriteBackUrl: pokedex.sprites.back_default,
            spriteFrontUrl: pokedex.sprites.front_default,
            spriteBackUrlShiny: pokedex.sprites.back_shiny,
            spriteFrontShinyUrl: pokedex.sprites.front_shiny,
            type: pokemonTypes,
            statsName: pokemonStatsName,
            baseStat: pokemonBaseStats,
            ability: pokemonAbilities,
            hiddenAbility: pokemonHiddenAbilities,
            species: pokedex.species,
          };

          this.pokemons.push(pokemon);
        }

        this.filteredPokemons = this.pokemons.slice();
      }
    });
  }

  pokemonFilter(value: string) {
    this.filteredPokemons = [];

    for (let i = 0; i < this.pokemons.length; i++) {
      const pokemon = this.pokemons[i];
      const isFilterValueInPokemonList = pokemon.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;

      if (isFilterValueInPokemonList) {
        this.filteredPokemons.push(pokemon);
      }
    }
  }

  getAllTypes() {
    this.pokemonHttpService.getListOfTypes(this.maximumTypes).subscribe(type => {
      this.types = [];

      for (let i = 0; i < type.results.length; i++) {
        const types = type.results[i];
        this.types.push(types.name);
      }

      this.filteredTypes = this.types.slice();
    });
  }

  typeFilter(value: string) {
    this.filteredTypes = [];

    for (let i = 0; i < this.types.length; i++) {
      const pokemonType = this.types[i];
      const pokemonFilterType = pokemonType.toLowerCase().indexOf(value.toLowerCase()) !== -1;

      if (pokemonFilterType) {
        this.filteredTypes.push(pokemonType);
      }
    }
  }
}
