import { Component, OnInit, ViewChild } from "@angular/core";
import { PokemonService } from '../services/pokemon.service';
import { HttpClient } from "@angular/common/http";
import { Pokemon } from '../models/pokemon.model';
import { PokemonPreviewComponent } from "../pokemon-preview/pokemon-preview.component";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
 
  private MAX_POKEMONS:number = 10;

  informationButtonStatue: boolean = false;
  modifButtonStatus: boolean = false;
  pokemonSelected!: Pokemon;
  
  constructor(public pokemonService: PokemonService,
              private http: HttpClient){}

  ngOnInit() {
      this.pokemonService.getPokemonlist(this.MAX_POKEMONS);
  }

  onClickInformationPokemon(pokemon: Pokemon){
      this.pokemonSelected = pokemon;

      if (this.informationButtonStatue === false) {
          this.informationButtonStatue = true;
      }
  }

  onClickModifierPokemon(pokemon: Pokemon){
    // console.log("+++ onClickModifierPokemon=",pokemon)
    this.pokemonSelected = pokemon;

    if (this.modifButtonStatus === false) {
        this.modifButtonStatus = true;
    }
}

public onWindowPreviewStateChange(windowOpenState:boolean){
    this.informationButtonStatue = windowOpenState;
    this.modifButtonStatus = windowOpenState;
  }

  public resetPokemonData(){
    this.pokemonService.getPokemonlist(this.MAX_POKEMONS);
    //console.log(pokemon);
  }
}
