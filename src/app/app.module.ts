import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdFormFieldModule, MdInputModule,
  MdListModule,
  MdCardModule,
  MatAutocompleteModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

import 'hammerjs';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListItemComponent,
    MovieCardComponent,
    MoviesContainerComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdToolbarModule,
    MdFormFieldModule,
    MdInputModule,
    MdListModule,
    MdCardModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
