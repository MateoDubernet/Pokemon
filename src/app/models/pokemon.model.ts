import { DataNameAndUrl } from './dataNameAndUrl';

export class Pokemon {
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
    species!: DataNameAndUrl;
}