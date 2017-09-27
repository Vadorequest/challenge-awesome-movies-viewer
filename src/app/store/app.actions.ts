import { Injectable } from '@angular/core';

@Injectable()
export class MovieActions {
  static CHANGE_SELECTED_MOVIE = 'CHANGE_SELECTED_MOVIE';

  changeSelectedMovie(payload: any): any {
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
