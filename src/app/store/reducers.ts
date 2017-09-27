import { MovieActions, AnyValidAction } from './app.actions';
import { IMovie } from '../movie.model';

export interface IAppState {
  selectedMovie: IMovie;
}

export const INITIAL_STATE: IAppState = {
  selectedMovie: null,
};

export function rootReducer(lastState: IAppState, action: AnyValidAction): IAppState {
  switch (action.type) {
    case MovieActions.CHANGE_SELECTED_MOVIE: return {
      ...lastState,
      selectedMovie: action.payload
    };
  }

  return lastState;
}
