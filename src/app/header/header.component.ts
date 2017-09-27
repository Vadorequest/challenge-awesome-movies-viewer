import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { NgRedux } from '@angular-redux/store';
import { MovieActions } from '../store/app.actions';
import { IAppState } from '../store/reducers';
import { IMovie } from '../movie.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MovieService]
})
export class HeaderComponent implements OnInit {
  title: String = 'Awesome Movies Viewer (alpha)';
  movies: Array<any>;
  filteredMovies: Observable<any[]>;
  textFilterControl: FormControl;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private movieActions: MovieActions,
    private movieService: MovieService
  ) {
    this.textFilterControl = new FormControl();
  }

  ngOnInit() {
    this.movieService.getMostPopular()
      .then(data => this.movies = data.results)
      .then(() => {
        this.refreshFilteredMovies();
      });
  }

  filter(searchedMovie: string): IMovie[] {
    return this.movies.filter(movie =>
      movie.title.toLowerCase().indexOf(searchedMovie.toLowerCase()) === 0);
  }

  onSelectionChange($event) {
    // XXX multiple events are fired, we only want those the user actually triggers.
    if ($event.isUserInput) {
      const selectedMovie: IMovie = this.filter($event.source.value)[0];
      this.changeSelectedMovie(selectedMovie);
    }
  }

  private changeSelectedMovie(movie: IMovie) {
    if (movie.title) { // If the selected movie is invalid for any reason, don't update to avoid a white page.
      this.ngRedux.dispatch(this.movieActions.changeSelectedMovie(movie));
      this.textFilterControl.reset();
      this.refreshFilteredMovies(); // Necessary to force refresh the list even after resetting the input.
    } else {
      console.log('Selected movie not found'); // This should be a UI alert.
    }
  }

  private refreshFilteredMovies() {
    this.filteredMovies = this.textFilterControl.valueChanges
      .startWith(null)
      .map(searchedMovie => searchedMovie ? this.filter(searchedMovie) : this.movies.slice());
  }

}
