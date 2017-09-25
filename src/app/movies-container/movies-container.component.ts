import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css'],
})
export class MoviesContainerComponent implements OnInit {
  selectedMovie: Object;
  movies: Array<Object> = [
      {
        id: 0,
        label: 'Batman',
      },
      {
        id: 1,
        label: 'Spiderman',
      },
    ];

  constructor() { }

  ngOnInit() {
    if(!this.selectedMovie){
      this.selectedMovie = this.movies[0];
    }
  }

  onSelect(movie) {
    this.selectedMovie = movie;
  }

}
