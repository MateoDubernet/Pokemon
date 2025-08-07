import { PokemonAbilities } from "./Abilities/pokemonAbilities.model";
import { PokemonPastAbilities } from "./Abilities/pokemonPastAbilities.model";
import { Cries } from "./cries.model";
import { DataNameAndUrl } from "./dataNameAndUrl";
import { GameIndices } from "./gameIndices.model";
import { PokemonHeldItems } from "./Items/pokemonHeldItems.model";
import { PokemonMoves } from "./Moves/pokemonMoves.model";
import { PokemonSprites } from "./pokemonSprites.model";
import { PokemonStats } from "./pokemonStats.model";
import { PokemonPastTypes } from "./Types/pokemonPastTypes.model";
import { PokemonType } from "./Types/pokemonType.model";

export class PokedexEntry {
    abilities!: PokemonAbilities[];
    base_experience!: number;
    cries!: Cries;
    forms!: DataNameAndUrl[];
    game_indices!: GameIndices[];
    height!: number;
    held_items!: PokemonHeldItems[];
    id!: number;
    is_default!: boolean;
    location_area_encounters!: string;
    moves!: PokemonMoves[];
    name!: string;
    order!: 71;
    past_abilities!: PokemonPastAbilities[];
    past_types!: PokemonPastTypes[];
    species!: DataNameAndUrl;
    sprites!: PokemonSprites;
    stats!: PokemonStats[];
    types!: PokemonType[];
    weight!: number;
}