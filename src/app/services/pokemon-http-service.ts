import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from '../models/pokemon.model';
import { SourceData } from '../models/sourceData.model';
import { PokedexEntry } from '../models/pokedexEntry.model';

@Injectable({
    providedIn: 'root'
})

export class PokemonHttpService {

    private baseUrl = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient){}
    
    getPokemonByName(pokemonName:string): Observable<PokedexEntry> {
       return this.http.get<PokedexEntry>(`${this.baseUrl}/pokemon/${pokemonName}`);
    }

    getListOfTypes(limit: number): Observable<SourceData> {
        return this.http.get<SourceData>(`${this.baseUrl}/type?limit=${limit}`);
    }

    getPokemonlist(limit: number): Observable<SourceData> {
        return this.http.get<SourceData>(`${this.baseUrl}/pokemon?limit=${limit}`);
    }
}