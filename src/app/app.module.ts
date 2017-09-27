import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdFormFieldModule, MdInputModule,
  MdListModule,
  MdCardModule,
  MdAutocompleteModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { rootReducer, IAppState, INITIAL_STATE } from './store/reducers';
import { MovieSelectedAction } from './store/app.actions';

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
    NgReduxModule,
    MdToolbarModule,
    MdFormFieldModule,
    MdInputModule,
    MdListModule,
    MdCardModule,
    MdAutocompleteModule,
  ],
  providers: [MovieSelectedAction],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension
  ) {

    let enhancers = [];
    // ... add whatever other enhancers you want.

    // We only want to expose this tool in devMode.
    if (isDevMode() && devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [ createLogger() ],
      enhancers
    );
  }
}
