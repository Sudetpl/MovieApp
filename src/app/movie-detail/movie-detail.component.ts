import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  //localhost:4200/detail/:id
  @Input()
  movie: Movie | undefined;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(): void {
    // const id = +this.route.snapshot.paramMap.get('id')!;
    let idStr = this.route.snapshot.paramMap.get('id');
    if (idStr == null) {
      idStr = "1"
    }

    const id = parseInt(idStr);


    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }
}