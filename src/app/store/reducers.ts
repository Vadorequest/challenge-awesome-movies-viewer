import { MovieSelectedAction, AnyValidAction } from './app.actions';

export interface IAppState {
  selectedMovie: any;
}

export const INITIAL_STATE: IAppState = {
  selectedMovie: null,
};

export function rootReducer(lastState: IAppState, action: AnyValidAction): IAppState {
  switch (action.type) {
    case MovieSelectedAction.MOVIE_SELECTED: return {
      ...lastState,
      selectedMovie: action.payload
    };
  }

  return lastState;
}
