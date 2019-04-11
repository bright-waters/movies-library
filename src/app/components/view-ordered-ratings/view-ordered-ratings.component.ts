import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../../services/movieService/movie-service.service';
import {RatingResults} from '../../models/RatingResults';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-ordered-ratings',
  templateUrl: './view-ordered-ratings.component.html',
  styleUrls: ['./view-ordered-ratings.component.css']
})
export class ViewOrderedRatingsComponent implements OnInit {

  constructor(private moviesService: MovieServiceService, private router: Router) { }
    moviesRatings: RatingResults[] =  [];

  ngOnInit() {
    this.getMovieRatings()
  }
  public getMovieRatings(): void {
    this.moviesService.GroupByRatings().subscribe(movies => {
      movies.forEach(movie => {
        this.moviesRatings.push(movie);
      });

      console.log(this.moviesRatings);
    });
  }

  public back() {
    this.router.navigate([`viewMovies`]);
  }

}
