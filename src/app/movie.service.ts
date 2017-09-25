import { Injectable } from '@angular/core';

import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {

  constructor() { }

  get(): Promise<Array<Object>> {
    return Promise.resolve(MOVIES);
  }

}
