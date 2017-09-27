import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { MovieActions} from '../store/app.actions';
import { IAppState} from '../store/reducers';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs/Observable';
import { IMovie } from '../movie.model';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css'],
  providers: [MovieService]
})
export class MoviesContainerComponent implements OnInit {
  movies: Array<IMovie>;
  @select() readonly selectedMovie$: Observable<IMovie>;

  constructor(
    private movieService: MovieService,
    private movieActions: MovieActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    // Fetch movies and use the first one as default displayed movie.
    this.getMovies()
      .then(movies =>
        this.ngRedux.dispatch(this.movieActions.changeSelectedMovie(this.movies[0]))
      );
  }

  getMovies() {
    return this.movieService.getMostPopular()
      .then(data => this.movies = data.results);
  }

  onSelect(movie: IMovie) {
    this.ngRedux.dispatch(this.movieActions.changeSelectedMovie(movie));
  }
}
