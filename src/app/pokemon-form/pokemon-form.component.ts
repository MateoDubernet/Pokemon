import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PokemonService } from '../services/pokemon-service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss'],
})
export class PokemonFormComponent implements OnInit {
  @Input() dialogDisplay!: boolean;
  @Input() set dataPokemon(value: Pokemon) {
    this._dataPokemon = value;
    this.pokemonFormGroup.reset(value);
  }

  get dataPokemon() {
    return this._dataPokemon;
  }

  @Output() windowDisplayChange = new EventEmitter<boolean>();
  @Output() pokemonNameFormValue = new EventEmitter<string>();

  public pokemonFormGroup = new FormGroup({
    name: new FormControl(``, [Validators.required]),
    type: new FormControl(``, [Validators.required, Validators.maxLength(2)]),
  });

  get filteredTypes() {
    return this.pokemonService.filteredTypes;
  }

  private _dataPokemon!: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllTypes();
  }

  closeDialog() {
    this.dialogDisplay = false;
    this.windowDisplayChange.emit(this.dialogDisplay);
  }

  cancel() {
    this.closeDialog();
    this.pokemonFormGroup.reset(this.dataPokemon);
  }

  validate() {
    this.pokemonFormGroup.markAllAsTouched();
    if (!this.pokemonFormGroup.valid) {
      return;
    }

    this.closeDialog();
    this.dataPokemon.name = this.pokemonFormGroup.value.name;
    this.dataPokemon.type = this.pokemonFormGroup.value.type;
  }

  typeFilter(value: string) {
    this.pokemonService.typeFilter(value);
  }
}
