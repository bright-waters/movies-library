import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MovieServiceService} from '../../services/movieService/movie-service.service';
import {Movies} from '../../models/Movies';
import {RatingServiceService} from '../../services/ratingService/rating-service.service';
import {CategoryServiceService} from '../../services/categoryService/category-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movieTitle?: string ;
  searchActive = false;
  movieCategory ?: string;
  movies: Movies[] = [];
  constructor(private moviesService: MovieServiceService, private ratingService: RatingServiceService,
              private categoryService: CategoryServiceService, private router: Router) {}
  ngOnInit(): void {
    this.getMovies();
  }

 public getMovies(): void {
    this.moviesService.getMovies().subscribe(movies => {
      movies.forEach(movie => {
        this.movies.push(movie);
      });
    });
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
  public search() {
    this.searchActive = true;
    this.movies = [];
    console.log(this.movieTitle)
;   this.router.navigate([`search/${this.movieTitle}/${this.movieCategory}`]);
  }

  public  async addMovie() {
   await  this.router.navigate([`addMovie`]);
  }
}
