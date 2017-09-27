import { MovieActions, AnyValidAction } from './app.actions';

export interface IAppState {
  selectedMovie: any;
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
