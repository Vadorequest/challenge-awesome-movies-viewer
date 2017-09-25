import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css'],
  providers: [MovieService]
})
export class MoviesContainerComponent implements OnInit {
  movies: Array<Object>;
  selectedMovie: Object;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // Fetch movies and use the first one as default displayed movie.
    this.getMovies().then(movies => this.selectedMovie = this.movies[0]);
  }

  getMovies(): Promise<Array<Object>> {
    return this.movieService.get().then(movies => this.movies = movies);
  }

  onSelect(movie) {
    this.selectedMovie = movie;
  }

}
