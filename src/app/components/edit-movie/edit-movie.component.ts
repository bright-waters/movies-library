import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Movies} from '../../models/Movies';
import {MovieServiceService} from '../../services/movieService/movie-service.service';
import {CategoryServiceService} from '../../services/categoryService/category-service.service';
import {RatingServiceService} from '../../services/ratingService/rating-service.service';
import {Category} from '../../models/Category';
import {Rating} from '../../models/Rating';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
constructor(private activatedRoute: ActivatedRoute, private moviesService: MovieServiceService,
            private ratingService: RatingServiceService,
            private categoryService: CategoryServiceService,
            private router: Router) {
  }
  id: number;
  extractedId: string;
  getMovie: Movies;
  ratings: Rating[] = [];
  categories: Category[] = [];
  movieName = '';
  rating = '';
  category = '';

ngOnInit() {
    this.getMovieId();
    this.getMovieToEdit();
    this.getRatings();
    this.getCategories();
  }

  public getMovieId() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.movieId;
    });
  }

  public getMovieToEdit() {
   this.extractedId = this.id.toString().substring(1);
   this.moviesService.getMovieById(Number(this.extractedId)).subscribe(movie =>
     (this.getMovie = movie, this.movieName = movie.name , this.category = movie.category, this.rating = movie.rating)
    );
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

  public onEdit(): void {
   const idValue = Number(this.extractedId);
   this.moviesService.updateMovie({id: idValue, name: this.movieName, category: this.category, rating: this.rating }).subscribe();
   setTimeout(() => {
      window.location.reload();
    }, 300);
   this.router.navigate([`viewMovies`]);


  }

  public onCancel(): void {
    setTimeout(() => {
      window.location.reload();
    }, 300);
    this.router.navigate([`viewMovies`]);
  }

}


