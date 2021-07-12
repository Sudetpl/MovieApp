import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Movie } from '../movie';


@Component({
    selector: 'movies', //<movies></movies>
    templateUrl: 'movies.component.html'
    


    // selector: '.movies' //<div class='movies'
    // selector: '#movies' //<div id='movies'
})
export class MoviesComponent {
     title = "Movie List";

     movie: Movie = {
         id: 1,
         name: 'Movie Name'
     }

     getTitle(){
         return this.title;
     }
}