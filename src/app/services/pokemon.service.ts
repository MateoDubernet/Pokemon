import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemons, Pokedex, Pokemon, TypeOfPokemon, ListOfTypes, PokemonStats } from '../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})

export class PokemonService{
    
    private baseUrl = 'https://pokeapi.co/api/v2';
    public pokemonList!: Pokemon[];
    public filterPokemon!: Pokemon[];

    public listofTypes!: string[];
    public filterType!: string[];

    public typesPokemon!: string[]; 

    public pokemonStatsName!: string[];
    public pokemonBaseStats!: number[];

    public pokemonAbility!: string[];
    public pokemonHiddenAbility?: string[];

    constructor(private http: HttpClient){}
    
    public getPokemonByName(pokemonName:string): Observable<Pokedex>{
       return this.http.get<Pokedex>(`${this.baseUrl}/pokemon/${pokemonName}`)
    }

    public getPokemonlist(limit: number): Observable<Pokemons>{

        let getPokemon = this.http.get<Pokemons>(`${this.baseUrl}/pokemon?limit=${limit}`)
        console.log(getPokemon)
        getPokemon.subscribe(async (pokemons)=>{
            
        this.pokemonList = [] 
        for (let i = 0; i < pokemons.results.length; i++) {
            let pokemonRes = pokemons.results[i];
                // console.log("-----url = "+pokemonRes.url)
                let pokedex = await this.getPokemonByName(pokemonRes.name).toPromise();

                if(pokedex !== undefined){

                    //console.log(pokedex.types)
                    this.typesPokemon = []
                    for (let i = 0; i < pokedex.types.length; i++) {
                        let types = pokedex.types[i].type?.name
                        this.typesPokemon.push(types)
                    }
                    //console.log(this.typesPokemon)

                    //console.log(pokedex.stats)
                    this.pokemonStatsName = [];
                    this.pokemonBaseStats = [];
                    for (let i = 0; i < pokedex.stats.length; i++) {
                        let statName = pokedex.stats[i].stat.name;
                        let baseStats = pokedex.stats[i].base_stat;

                        this.pokemonBaseStats.push(baseStats);
                        this.pokemonStatsName.push(statName);
                    }
                    
                    //console.log(pokedex.abilities)
                    this.pokemonAbility = []
                    this.pokemonHiddenAbility = []
                    for (let i = 0; i < pokedex.abilities.length; i++) {
                        let abilityName = pokedex.abilities[i];

                        if (!abilityName.is_hidden) {
                            this.pokemonAbility.push(abilityName.ability.name);
                        }else{
                            this.pokemonHiddenAbility?.push(abilityName.ability.name);
                        }
                    }
                    // console.log(this.type1Pokemon?.type?.name);
                    // console.log(this.type2Pokemon?.type?.name);
                    //console.log(this.pokemonStatsName, this.pokemonBaseStats)

                    let pokemon:Pokemon = {
                        "name": pokedex.name,
                        "id": pokedex.id,
                        "height": pokedex.height / 10,
                        "weight": pokedex.weight / 10,
                        "spriteBackUrl" :  pokedex.sprites.back_default,
                        "spriteFrontUrl" : pokedex.sprites.front_default,
                        "spriteBackUrlShiny": pokedex.sprites.back_shiny,
                        "spriteFrontShinyUrl": pokedex.sprites.front_shiny,
                        "type": this.typesPokemon,
                        "statsName": this.pokemonStatsName,
                        "baseStat": this.pokemonBaseStats,
                        "ability": this.pokemonAbility,
                        "hiddenAbility": this.pokemonHiddenAbility,
                    }
                    this.pokemonList.push(pokemon);  
                    //console.log(pokedex);
                }
                this.filterPokemon = this.pokemonList.slice();
            }
        })
        return getPokemon;
    }

    public pokemonFilter(value: string){

        this.filterPokemon = [];
      
            for (let i = 0; i < this.pokemonList.length; i++) {
                let pokemon = this.pokemonList[i];
                
                let isFilterValueInPokemonList = pokemon.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
                
                if (isFilterValueInPokemonList) {
                    this.filterPokemon.push(pokemon);
                }
            }
        }

    public getListOfTypes(limit: number): Observable<ListOfTypes>{
        let getList = this.http.get<ListOfTypes>(`${this.baseUrl}/type?limit=${limit}`)

        getList.subscribe((type)=>{

            this.listofTypes = [];
            for (let i = 0; i < type.results.length; i++) {
                let types = type.results[i];
                this.listofTypes.push(types.name);
            }
            this.filterType = this.listofTypes.slice()
           // console.log(this.listofTypes) 
        })
        return getList;
    }

    public typeFilter(value: string){

        this.filterType = [];
    
        for (let i = 0; i < this.listofTypes.length; i++) {
            let pokemonType = this.listofTypes[i];
            
            let pokemonFilterType = pokemonType.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    
            if(pokemonFilterType){
            this.filterType.push(pokemonType);
            }
        }
    }
}