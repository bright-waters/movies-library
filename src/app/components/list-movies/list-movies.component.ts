import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../../services/movieService/movie-service.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  constructor(private moviesService: MovieServiceService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe((res) => {
        console.log(res);
      });
  }

}
