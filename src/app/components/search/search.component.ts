import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RatingServiceService} from '../../services/ratingService/rating-service.service';
import {MovieServiceService} from '../../services/movieService/movie-service.service';
import {CategoryServiceService} from '../../services/categoryService/category-service.service';
import {Movies} from '../../models/Movies';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieCategory = '';
  movieTitle = '';
  movies: Movies[] = [];
  constructor(private router: Router, private moviesService: MovieServiceService, private ratingService: RatingServiceService,
              private categoryService: CategoryServiceService , private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.getSearchParams();
    this.search();
  }


  public getSearchParams() {
    this.activatedRoute.params.subscribe(param => {
      this.movieTitle = param.movieTitle;
      this.movieCategory = param.movieCategory;
    });
  }

  public search() {

    if (this.movieCategory === 'undefined' || this.movieCategory === null || this.movieCategory === '') {
      this.movieCategory = 'no value';
    }

    if (this.movieTitle === 'undefined' || this.movieTitle === null || this.movieTitle === '' ) {
      this.movieTitle = 'no value';
    }
    this.moviesService.search(this.movieTitle , this.movieCategory).subscribe(movies => {
      movies.forEach(movie => {
        this.movies.push(movie);
      });
      console.log('dfrg', movies);
    });
  }

  public back() {
    this.router.navigate([`viewMovies`]);
  }

  public async onClickEditButton(id: any) {
    await  this.router.navigate([`editMovie/:${id}`]);
  }

  public onClickDeleteButton(id: any) {
    this.moviesService.deleteMovie(id).subscribe();
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }
}
