import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListMoviesComponent} from './components/list-movies/list-movies.component';
import {EditMovieComponent} from './components/edit-movie/edit-movie.component';
import {AddMovieComponent} from './components/add-movie/add-movie.component';
import {SearchComponent} from './components/search/search.component';
import {ViewOrderedRatingsComponent} from './components/view-ordered-ratings/view-ordered-ratings.component';

const routes: Routes = [
  { path: '', redirectTo: '/viewMovies', pathMatch: 'full' },
  { path: 'viewMovies', component: ListMoviesComponent },
  { path: 'editMovie/:movieId', component: EditMovieComponent },
  { path: 'addMovie', component: AddMovieComponent },
  { path: 'search/:movieTitle/:movieCategory', component: SearchComponent },
  { path: 'viewOrderedRatingsCount', component: ViewOrderedRatingsComponent }
];

@NgModule({

  exports: [ RouterModule ],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
