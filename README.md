# Awesome Movies Viewer (alpha)

## Online demo

See https://awesome-movies-viewer.firebaseapp.com/

## App

This project is a showcase and a first attempt at Angular 2-4-io.

It follows the specifications given in [the specs](./specs.pdf).

Angular Material 2 has been used for the UI components.

Angular-Redux has been used for the search input and the list on the left, in order to refresh the currently selected movie.
I didn't really want to use it at first (seemed overkill) but actually came up handy for dealing with multiple source of input (search bar and the list on the left).

Angular services are used for the fetching part, they really on `fetch` and not on Angular HTTP internal module.
I could have used https://github.com/impronunciable/moviedb instead of fetch. But overkill.

The application only fetches the 20 most popular movies from the API, they aren't stored in redux (because I added redux after I finished the fetching part) but are provided through the `MovieService`.

The search autocomplete only filter those 20 pre-fetched results.

Additionally to the movies fetched, the application also displays other covers related to the movie (like a carousel), replacing the poster image.
Ofc, it's not really user friendly (the description jumps every 2s, not reading-friendly), and I'd have made a real carousel in a real app, or rather thumbnails.

## Limitations

There are a few UI bugs, like the autocomplete placeholder color/location that I won't fix, not really important for a demo app.

I'm used to Bootstrap and wanted to change a bit, but I wouldn't use Angular Material for a real production app. Bootstrap is more useful and robust, IMHO.

In a real app, I'd have loaded the movie's poster based on the screen size/device to load as smaller images as possible.

Not really mobile friendly. (#mobile-ugly)

Style is written in CSS, not SASS/LESS/etc.

Displayed cover aren't localized and display text in various languages. (this is configurable through the API options)

No AOT. (slower, bigger)

## Run it yourself

1. Clone it
1. `npm i`
1. `npm start`
1. Go to http://localhost:4200/

---

Angular doc
------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
