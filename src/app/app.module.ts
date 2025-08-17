import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonPreviewComponent } from './pokemon-preview/pokemon-preview.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { WindowModule, DialogModule } from '@progress/kendo-angular-dialog';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

@NgModule({
  declarations: [AppComponent, PokemonPreviewComponent, PokemonListComponent, PokemonFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputsModule,
    LabelModule,
    IconsModule,
    ButtonsModule,
    HttpClientModule,
    DropDownsModule,
    ToolBarModule,
    WindowModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
