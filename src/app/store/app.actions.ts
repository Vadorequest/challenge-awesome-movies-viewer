import { Injectable } from '@angular/core';

@Injectable()
export class MovieSelectedAction {
  static MOVIE_SELECTED = 'MOVIE_SELECTED';

  update(payload: any): any {
    return {
      type: MovieSelectedAction.MOVIE_SELECTED,
      payload
    };
  }
}

export type AnyValidAction = {
  type: string;
  payload: any;
};
