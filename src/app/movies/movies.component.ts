import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Movies } from '../movie.datasource';

@Component({
    selector: 'movies', //<movies></movies>
    templateUrl: 'movies.component.html'
    


    // selector: '.movies' //<div class='movies'
    // selector: '#movies' //<div id='movies'
})
export class MoviesComponent {
     title = "Movie List";
     movies = Movies;
     
}