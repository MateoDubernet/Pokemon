export class NameUrl{
    name!: string;
    url!: string;
}

export class PokemonStats{
    base_stat!: number;
    stat!: {name: string}
}

export class Pokemons{
    count!:number;
    next!: string;
    previous: any;
    results!: NameUrl[];
}

export class Abilities{
    ability!: {name: string};
    is_hidden!: boolean;
}

export class TypeOfPokemon{
    slot!: number;
    type!: {name: string};
}

export class Pokedex{
    name!: string;
    abilities!: Abilities[];
    forms!: NameUrl[];
    height!: number;
    id!: number;
    sprites!: {back_default: string , front_default: string, back_shiny: string, front_shiny: string};
    types!: TypeOfPokemon[];
    weight!: number;
    stats!: PokemonStats[];
}

export class Pokemon{
    name!: string;
    id!: number;
    height?: number;
    weight?: number;
    spriteBackUrl!:  string;
    spriteFrontUrl!: string;
    spriteFrontShinyUrl!: string;
    spriteBackUrlShiny!: string;
    type!: string[];
    statsName?: string[];
    baseStat?: number[];
    ability!: string[];
    hiddenAbility?: string[];
}

export class ListOfTypes{
    count!: number;
    results!: NameUrl[];
}