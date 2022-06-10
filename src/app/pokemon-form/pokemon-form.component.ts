import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from "@angular/core";
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";
import { PokemonPreviewComponent } from '../pokemon-preview/pokemon-preview.component';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})

export class PokemonFormComponent implements OnInit {

  private maximumTypes: number = 20;//
  public listofTypes!: string[];//
  public pokemonFormGroup = new FormGroup({
    name: new FormControl(``, [Validators.required]),
    type: new FormControl(``, [Validators.required, Validators.maxLength(2)]),
  })

  public submit!: boolean;
  private _dataPokemon!:Pokemon;

  @Input() 
  set dataPokemon(value:Pokemon){
    // console.log("--------------------> VALUE=",value)
    this._dataPokemon = value;
    this.pokemonFormGroup.reset(value)
  }

  get dataPokemon(){
    return this._dataPokemon;
  }

  @Input() dialogDisplay!: boolean;
  
  @Output() windowDisplayChange = new EventEmitter<boolean>();
  @Output() pokemonNameFormValue = new EventEmitter<string>();

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    // console.log("*** this.dataPokemon=",this.dataPokemon)
    this.pokemonService.getListOfTypes(this.maximumTypes)//
  }

  closeFormWindow(){
      this.dialogDisplay = false;
      this.submit = false;
      this.pokemonFormGroup.reset(this.dataPokemon)
      this.windowDisplayChange.emit(this.dialogDisplay);
  }

  validatePokemonDataChange(){
    this.submit = true;
    const name = this.pokemonFormGroup.value.name;
    const types = this.pokemonFormGroup.value.type;

    // console.log(this.changeName.value.pokemonTypeMultiSelected)
    // if(this.changeName.get('pokemonName')?.value != null) {
      if(name && types) {
      this.submit = false;

      this.dialogDisplay = false;
      this.windowDisplayChange.emit(this.dialogDisplay);
      this.dataPokemon.name = this.pokemonFormGroup.value.name;
      this.dataPokemon.type = this.pokemonFormGroup.value.type;
      //console.log(this.dataPokemon.type)
      console.log(this.pokemonFormGroup.value)
    }
  }

  cancelPokemonDataChange(){
    this.dialogDisplay = false;
    this.submit = false;
    this.pokemonFormGroup.reset(this.dataPokemon)
    this.windowDisplayChange.emit(this.dialogDisplay);
  }
}

function customValidatorTypeFilter(c: AbstractControl):{[nbrType: string]: Boolean}| null{
  
  return null;
}
