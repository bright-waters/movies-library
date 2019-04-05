import { Component, OnInit } from '@angular/core';
import {Category} from '../../models/Category';
import {Rating} from '../../models/Rating';
import {MovieServiceService} from '../../services/movieService/movie-service.service';
import {CategoryServiceService} from '../../services/categoryService/category-service.service';
import {RatingServiceService} from '../../services/ratingService/rating-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  id: number;
  ratings: Rating[] = [];
  categories: Category[] = [];
  movieName = '';
  rating = '';
  category = '';
  constructor(private moviesService: MovieServiceService,
              private ratingService: RatingServiceService,
              private categoryService: CategoryServiceService,
              private router: Router) { }

  ngOnInit() {

    this.getRatings();
    this.getCategories();
  }
  public getRatings(): void {
    this.ratingService.getRatings().subscribe(ratings => {

      ratings.forEach(element => {
        this.ratings.push(element);
      });
    });
  }
  public getCategories(): void {
    this.categoryService.getCategories().subscribe(categories =>
      this.categories = categories);
  }
  public  addMovie() {
    this.moviesService.createMovie({ name: this.movieName, category: this.category, rating: this.rating}).subscribe();
    this.router.navigate([`viewMovies`]);
  }
  public onCancel(): void {
    setTimeout(() => {
      window.location.reload();
    }, 300);
    this.router.navigate([`viewMovies`]);
  }
}
