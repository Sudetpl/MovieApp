import { style } from "@angular/animations";
import { Component } from "@angular/core";


@Component({
    selector: 'movies', //<movies></movies>
    templateUrl: 'movies.component.html',
    styles: [
        'h2 { color:blue;}'
        
    ]
    // selector: '.movies' //<div class='movies'
    // selector: '#movies' //<div id='movies'
})
export class MoviesComponent {

}