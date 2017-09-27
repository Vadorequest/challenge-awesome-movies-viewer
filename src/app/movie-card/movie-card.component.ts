import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '../movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  providers: [MovieService]
})
export class MovieCardComponent implements OnInit, OnChanges {
  @Input() movie: IMovie;
  movieImages: Array<any>;
  currentPosterPath: String;
  currentPosterIndex = 0;
  carouselInterval = null;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.currentPosterPath = this.movie.poster_path;
    this.getMovieImages()
    // Once the images for the movie are fetched, we change the cover image every 2s.
      .then(() => {
        // XXX Delete previous created setInterval. Otherwise they stack and the carousel speed increases at every change.
        if (this.carouselInterval) {
          clearInterval(this.carouselInterval);
        }

        this.carouselInterval = setInterval(() => {
          if (++this.currentPosterIndex > this.movieImages.length - 1) {
            this.currentPosterIndex = 0;
          }
          this.currentPosterPath = this.movieImages[this.currentPosterIndex].file_path;
        }, 2000);
      });
  }

  getMovieImages() {
    return this.movieService.getImages(this.movie.id)
      .then(data => this.movieImages = data.posters);
  }
}
