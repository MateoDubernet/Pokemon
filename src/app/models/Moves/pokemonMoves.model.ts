import { DataNameAndUrl } from "../dataNameAndUrl";
import { PokemonMovesVersionGroupDetails } from "./pokemonMovesVersionGroupDetails.model";

export class PokemonMoves {
    move!: DataNameAndUrl;
    version_group_details!: PokemonMovesVersionGroupDetails[];
}