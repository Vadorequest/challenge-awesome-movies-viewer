import { Injectable } from '@angular/core';

import { Config } from './config.interface';

// Merge configs. TODO Should be done elsewhere, maybe a service, or rather at bootstrap.
const config: Config = Object.assign({}, require('./config.json'), require('./config.local.json'));

@Injectable()
export class MovieService {
  private baseUrl: String = 'https://api.themoviedb.org/3';
  private discoverUrl = this.baseUrl + '/discover/movie?sort_by=popularity.desc&include_adult=false';

  constructor() { }

  getMostPopular(): Promise<any> {
    // TODO Fetch vs Angular HTTP?
    return fetch(
      `${this.discoverUrl}&api_key=${config.apiKey}`,
      {method: 'GET'}
    )
      .then(promise => promise.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => console.error(err));
  }

  getImages(id: number): Promise<any> {
    return fetch(
      `${this.baseUrl}/movie/${id}/images?api_key=${config.apiKey}`,
      {method: 'GET'}
    )
      .then(promise => promise.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => console.error(err));
  }

}
