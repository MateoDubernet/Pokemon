import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.scss']
})
export class PokemonPreviewComponent implements OnInit{

  @Input() dataPokemon!: Pokemon;
  @Input() windowDisplay!: boolean;

  @Output() windowDisplayChange = new EventEmitter<boolean>();

  constructor(public pokemonService: PokemonService){}

  ngOnInit(): void {
  }

  closeWindow(){
      this.windowDisplay = false;
      this.windowDisplayChange.emit(this.windowDisplay);
  }
}
