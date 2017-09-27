import { Injectable } from '@angular/core';
import { IMovie } from '../movie.model';

@Injectable()
export class MovieActions {
  static CHANGE_SELECTED_MOVIE = 'CHANGE_SELECTED_MOVIE';

  changeSelectedMovie(payload: IMovie): AnyValidAction {
    return {
      type: MovieActions.CHANGE_SELECTED_MOVIE,
      payload
    };
  }
}

export type AnyValidAction = {
  type: string;
  payload: any;
};
