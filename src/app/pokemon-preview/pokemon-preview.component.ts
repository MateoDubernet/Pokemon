import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.scss'],
})
export class PokemonPreviewComponent {
  @Input() dataPokemon!: Pokemon;
  @Input() windowDisplay!: boolean;

  @Output() windowDisplayChange = new EventEmitter<boolean>();

  constructor() {}

  closeWindow() {
    this.windowDisplay = false;
    this.windowDisplayChange.emit(this.windowDisplay);
  }

  getLastAbility(abilities: string[]): string {
    return abilities[abilities.length - 1];
  }
}
